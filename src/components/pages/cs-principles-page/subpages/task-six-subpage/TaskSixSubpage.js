import React, { Component } from 'react';
import './TaskSixSubpage.css';
import CarouselWrapper from '../../CarouselWrapper/CarouselWrapper';
import TitleWrapper from '../../TitleWrapper/TitleWrapper';
import AlgorithmTwoImagePath from '../../../../../assets/images/algorithmTwo.jpg';

class TaskSixSubpage extends Component {
    render() {
        return (
            <div>
                <TitleWrapper 
                    imagePath={AlgorithmTwoImagePath}
                    titleText="Objective Six"
                    titleDescription="Develop, implement, and evaluate an algorithm for implementation in a 
                        program using appropriate mathematical and logical concepts, including abstraction 
                        to manage complexity"
                />
                <CarouselWrapper>
                    <p>In my daily work, I use algorithms as a method of problem solving. 
                        Sometimes, I am able to use an algorithm from a library that was 
                        imported or even from the coding language itself. One example of 
                        this would be javascript's sort method. In javascript, I can 
                        sort an array using .sort(). The browser determines which 
                        sorting algorithm is used, but I don't have to reinvent the 
                        wheel. Here's an example of using that method in practice:</p>
                    <pre>
{`let fruits = [
    "Banana", 
    "Orange", 
    "Apple", 
    "Mango"
];
fruits.sort();
//returns a sorted array for fruits
console.log(fruits);
//result
Apple, Banana, Mango, Orange`}
                    </pre>
                    <div>
                        <p>However, the algorithm is not always available to me, 
                            so sometimes I need to create the algorithm. </p>
                        <p>Let's do that now. For simplicity's sake, 
                            let's create a new example problem</p>
                        <p className="noBottomPadding">Problem: Calculate the monthly paycheck of a salesperson at a local store.</p>
                    </div>
                    <div>
                        <p className="smallerText noBottomPadding">Additional Factors:</p>
                        <ul className="smallerText">
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
                    </div>
                    <div>
                        <p className="noTopPadding">Let's design an algorithm!</p>
                        <p>Based on the above information, we need to know the base salary, the number of 
                            years the person has been with the company, and the total sales made by that 
                            person for the month. Let's create variables for the necessary values:</p>
                        <ul>
                            <li>baseSalary</li>
                            <li>noOfServiceYears</li>
                            <li>totalSales</li>
                            <li>additionalBonus</li>
                        </ul>
                    </div>
                    <div>
                        <p className="smallerText noBottomPadding noTopPadding">The algorithm:</p>
                        <ol>
                            <li className="smallerText noBottomPadding noTopPadding">Get baseSalary</li>
                            <li className="smallerText noBottomPadding noTopPadding">Get noOfServiceYears</li>
                            <li className="smallerText">
                                <p className="smallerText noBottomPadding noTopPadding">Calculate Bonus:</p>
                                <p className="smallerText noBottomPadding noTopPadding">if (noOfServiceYears is less than or equal to five)</p>
                                <p className="smallerText noBottomPadding noTopPadding">bonus = 10 * noOfServiceYears</p>
                                <p className="smallerText noBottomPadding noTopPadding">otherwise</p>
                                <p className="smallerText noBottomPadding noTopPadding">bonus = 20 * noOfServiceYears</p>
                            </li>
                            <li className="smallerText noBottomPadding noTopPadding">Get total sales</li>
                            <li className="smallerText">
                                <p className="smallerText noBottomPadding noTopPadding">Calculate additional bonus:</p>
                                <p className="smallerText noBottomPadding noTopPadding">if (totalSales is greater than 5000 and totalSales is less than 10000)</p>
                                <p className="smallerText noBottomPadding noTopPadding">additionalBonus = totalSales * (0.03)</p>
                                <p className="smallerText noBottomPadding noTopPadding">otherwise</p>
                                <p className="smallerText noBottomPadding noTopPadding">additionalBonus = totalSales * (0.06)</p>
                            </li>
                            <li className="smallerText">
                                <p className="smallerText noBottomPadding noTopPadding">Calculate paycheck:</p>
                                <p className="smallerText noBottomPadding noTopPadding">paycheck = baseSalary + bonus + additionalBonus</p>
                            </li>
                        </ol>
                    </div>
                </CarouselWrapper>
            </div>
        );
    }
}

export default TaskSixSubpage;
