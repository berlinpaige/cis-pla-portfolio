import React, { Component } from 'react';
import './TaskSevenSubpage.css';


class TaskSevenSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Evaluate a proposed solution to a computational problem including locating and correcting 
                    errors and justifying appropriateness and correctness</h1>
                <p>Debugging is common practice in my daily job. Often a proposed solution can be found to have an error 
                    after it has been implemented. Some bugs are easier to spot than others, while some go unnoticed 
                    until a user experiences the issue. Making mistakes is unavoidable, however, as engineers, we must 
                    aim to solve a problem in a way that mitigates the error risk.</p>
                <p>Even though there are many ways to solve a problem, the approach you take must correctly use all 
                    concepts and techniques.</p>
                <h2>Let's take a look at an example:</h2>
                <p>Using java, print out the letter grade associated with the inputted int value</p>
                <p>The original solution was this:</p>
                <pre>
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
                <p>But can you spot the error?</p>
                <p>Let's suppose the value of the grade is 4. The value of the grade does not match the case 
                    labelled 5, but it does match the case labelled 4, so as we intended, it prints:</p>
                <p>The grade is B.</p>
                <p>However,</p>
                <p>The grade is C.</p>
                <p>The grade is D.</p>
                <p>The grade is F.</p>
                <p>The grade is invalid</p>
                <p>are also printed.</p>
                <p>But why? The problem is a partial misunderstanding of how the switch structure works, 
                    specifically when no break statement is included. After executing the statement 
                    associated with the matching case label, execution continues with the statements 
                    associated with the next case label. In this example, execution continues with all 
                    the remaining statements in the switch structure, resulting in the printing of four 
                    unintended lines.</p>
                <p>The correct program is as follows:</p>
                <pre>
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
                <p>Believe it or not, this particular kind of bug has stumped my coworkers and I 
                    in past complex situations. It can be a tough one to spot and certainly offers 
                    a "doh" moment for a seasoned programmer</p>

            </div>
        );
    }
}

export default TaskSevenSubpage;
