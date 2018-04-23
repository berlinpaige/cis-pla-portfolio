import React, { Component } from 'react';
import './TaskSevenSubpage.css';
import CarouselWrapper from '../../CarouselWrapper/CarouselWrapper';
import TitleWrapper from '../../TitleWrapper/TitleWrapper';
import DebuggingImagePath from '../../../../../assets/images/debugging.jpg';

class TaskSevenSubpage extends Component {
    render() {
        return (
            <div>
                <TitleWrapper 
                    imagePath={DebuggingImagePath}
                    titleText="Objective Seven"
                    titleDescription="Evaluate a proposed solution to a computational problem 
                        including locating and correcting errors and justifying appropriateness and correctness"
                />
                <CarouselWrapper>
                    <p className="noBottomPadding">Debugging is common practice in my daily job. Often a proposed solution 
                        can be found to have an error after it has been implemented. Some 
                        bugs are easier to spot than others, while some go unnoticed until 
                        a user experiences the issue. Making mistakes is unavoidable, 
                        however, as engineers, we must aim to solve a problem in a way 
                        that mitigates the error risk.</p>
                    <div>
                        <p>Even though there are many ways to solve a problem, the approach 
                            you take must correctly use all concepts and techniques.</p>
                        <p>Let's take a look at an example:</p>
                        <p>Problem: Using java, print out the letter grade associated 
                        with the int value input.</p>
                        <p className="noBottomPadding">The original solution was this:</p>
                    </div>
                    <div>
                        <pre className="smallerText noTopPadding">
{`
switch (grade)
{
case 5:
    System.out.println("The grade is A.");
case 4:
    System.out.println("The grade is B.");
case 3:
    System.out.println("The grade is C.");
case 2:
    System.out.println("The grade is D.");
case 1:
    System.out.println("The grade is F.");
default:
    System.out.println("The grade is invalid");
}
`}
                        </pre>
                        <p className="smallerText noBottomPadding">But can you spot the error?</p>
                    </div>
                    <div>
                        <p className="noTopPadding">Let's suppose the value of the grade is 4. The value of the grade 
                            does not match the case labelled 5, but it does match the 
                            case labelled 4, so as we intended, it prints: The grade is B.</p>
                        <p className="noBottomPadding">However,</p>
                        <p className="noBottomPadding noTopPadding">The grade is C.</p>
                        <p className="noBottomPadding noTopPadding">The grade is D.</p>
                        <p className="noBottomPadding noTopPadding">The grade is F.</p>
                        <p className="noBottomPadding noTopPadding">The grade is invalid</p>
                        <p className="noBottomPadding">are also printed.</p>
                    </div>
                    <div>
                        <p>But why? The problem is a partial misunderstanding of how the switch structure works, 
                            specifically when no break statement is included. After executing the statement 
                            associated with the matching case label, execution continues with the statements 
                            associated with the next case label. In this example, execution continues with all 
                            the remaining statements in the switch structure, resulting in the printing of four 
                            unintended lines.</p>
                        <p className="noBottomPadding">The correct program is as follows:</p>
                    </div>
                    <pre className="smallestText noBottomPadding noTopPadding smallestText">
{`
switch (grade)
{
case 5:
    System.out.println("The grade is A.");
    break;
case 4:
    System.out.println("The grade is B.");
    break;
case 3:
    System.out.println("The grade is C.");
    break;
case 2:
    System.out.println("The grade is D.");
    break;
case 1:
    System.out.println("The grade is F.");
    break;
default:
    System.out.println("The grade is invalid");
}
`}
                    </pre>
                    <p className="noBottomPadding">Believe it or not, this particular kind of bug has stumped my coworkers and I 
                        in past complex situations. It can be a tough one to spot and certainly offers 
                        a "doh" moment for a seasoned programmer.</p>
                </CarouselWrapper>
            </div>
        );
    }
}

export default TaskSevenSubpage;
