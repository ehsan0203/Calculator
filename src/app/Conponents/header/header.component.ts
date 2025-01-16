import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentValue: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondOperand: boolean = false;

  appendNumber(number: string) {
    if (this.waitingForSecondOperand) {
      this.currentValue = number;
      this.waitingForSecondOperand = false;
    } else {
      this.currentValue = this.currentValue === '0' ? number : this.currentValue + number;
    }
  }

  handleOperator(nextOperator: string) {
    const inputValue = parseFloat(this.currentValue);

    if (this.operator && this.waitingForSecondOperand) {
      this.operator = nextOperator;
      return;
    }

    if (this.firstOperand === null && !isNaN(inputValue)) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.performCalculation(this.firstOperand!, inputValue, this.operator);
      this.currentValue = `${parseFloat(result.toFixed(7))}`;
      this.firstOperand = result;
    }

    this.operator = nextOperator;
    this.waitingForSecondOperand = true;
  }

  performCalculation(firstOperand: number, secondOperand: number, operator: string): number {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  }

  clearAll() {
    this.currentValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }

  calculate() {
    if (this.operator && this.firstOperand !== null) {
      const inputValue = parseFloat(this.currentValue);
      const result = this.performCalculation(this.firstOperand, inputValue, this.operator);
      this.currentValue = `${parseFloat(result.toFixed(7))}`;
      this.firstOperand = null;
      this.operator = null;
      this.waitingForSecondOperand = false;
    }
  }
}