import React, { Component } from 'react';
import './TaskSixSubpage.css';


class TaskSixSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Develop, implement, and evaluate an algorithm for implementation in a program using
                    appropriate mathematical and logical concepts, including abstraction to manage complexity</h1>

                <p>In my daily work, I use algorithms as a method of problem solving. Sometimes, I am able to use an 
                    algorithm from a library that was imported or even from the coding language itself. One example of 
                    this would be javascript's sort method. In javascript, I can sort an array using .sort(). The browser 
                    determines which sorting algorithm is used, but I don't have to reinvent the wheel. Here's an example of 
                    using that method in practice:</p>
                    <pre>
{`let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
//returns a sorted array for fruits
console.log(fruits);
//result
Apple, Banana, Mango, Orange`}
                    </pre>
                <p>However, the algorithm is not always available to me, so sometimes I need to create the algorithm. </p>
                <p>Let's do that now. For simplicity's sake, let's create a new example problem</p>
                <h2>Problem: Calculate the monthly paycheck of a salesperson at a local store</h2>
                <ul>
                    <li>Every salesperson has a base salary</li>
                    <li>The salesperson receives a bonus at the end of the month based on the following criteria:
                        <ul>
                            <li>If the person has been with the store for 5 years or less, the bonus is $10 for each 
                                year he or she worked there.</li>
                            <li>If the person has been with the store for more than 5 years, the bonus is $20 for each 
                                year he or she has worked there.</li>
                        </ul>
                    </li>
                    <li>The salesperson can receive an additional bonus with the following criteria:
                        <ul>
                            <li>If the total sales made by the person for the month are more than $5,000 but less than $10,000, 
                                he or she receives 3% commission on the sale</li>
                            <li>If the total sales made by the person for the month are at least $10,000, 
                                he or she receives 6% commission on the sale</li>
                        </ul>
                    </li>
                </ul>

                <h2>Let's design an algorithm!</h2>
                <p>Based on the above information, we need to know the base salary, the number of years the 
                    person has been with the company, and the total sales made by that person for the month. Let's 
                    create variables for the necessary values:</p>
                <ul>
                    <li>baseSalary</li>
                    <li>noOfServiceYears</li>
                    <li>totalSales</li>
                    <li>additionalBonus</li>
                </ul>

                <p>The algorithm:</p>

                <ol>
                    <li>Get baseSalary</li>
                    <li>Get noOfServiceYears</li>
                    <li>
                        <p>Calculate Bonus:</p>
                        <p>if (noOfServiceYears is less than or equal to five)</p>
                        <p>bonus = 10 * noOfServiceYears</p>
                        <p>otherwise</p>
                        <p>bonus = 20 * noOfServiceYears</p>
                    </li>
                    <li>Get total sales</li>
                    <li>
                        <p>Calculate additional bonus:</p>
                        <p>if (totalSales is greater than 5000 and totalSales is less than 10000)</p>
                        <p>additionalBonus = totalSales * (0.03)</p>
                        <p>otherwise</p>
                        <p>additionalBonus = totalSales * (0.06)</p>
                    </li>
                    <li>
                        <p>Calculate paycheck:</p>
                        <p>paycheck = baseSalary + bonus + additionalBonus</p>
                    </li>
                </ol>
            </div>
        );
    }
}

export default TaskSixSubpage;
