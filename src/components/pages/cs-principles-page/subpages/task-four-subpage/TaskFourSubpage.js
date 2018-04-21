import React, { Component } from 'react';
import './TaskFourSubpage.css';


class TaskFourSubpage extends Component {
    render() {
        return (
            <div>
                <h1>Explain how data, information, and knowledge are represented for computational use</h1>
                <p>Digital data is represented in a mathematical number system called Binary.</p>
                <p>Binary has two digits, 0 and 1. These digits represent two states: off and on respectively.</p>
                <p>One binary digit (0 or 1) is a bit</p>
                <p>Bits can be grouped together into larger chunks to represent data. For example, 0110 is four bits. 
                    Computers tend to use 8-bit chunks of data called bytes as the basic unit of data. A byte is 
                    implemented with 8 computer switches. </p>
                <p>Just like the decimal number system, the binary numbering system is  a positional numbering system, 
                    meaning that the numbers indicate the relative value.</p>
                <h3>Let's look at an example:</h3>
                <p>In the number 5,432 - the 5 is worth 5,000, the 4 is worth 400, the 3 is worth 30, and the 2 
                    is worth 2. If you switch the numbers around, their relative values will also be switched around. 
                    The decimal system accomplishes this by using 10 as the base. This same process happens in binary, 
                    only it uses two as the base instead of ten. So the first position is 2^0, the second position is 2^1, 
                    the third position is 2^2, and so on.</p>
                <p>So what does this represent?: 00001011</p>
                <p>The bit in the ones place represents one and the bit in the twos place (tens place in decimal) 
                    represents two, the bit in the fours place represents zero, and the bit in the eights place represents eight, 
                    so the answer is 1+2+8 = 11</p>
                <p>But in our everyday use with computers, we don't really see binary since it is happening behind the 
                    scenes. Instead, we interact with images, text, colors, etc. So how is an image represented in binary?</p>
                <p>Digital images are made up of pixels. Each pixel is made up of binary numbers. To make a picture, the grid 
                    of pixels must be set according to metadata. For example, if the metadata describes the photo as 10px x 10px, 
                    the image will be 100 sq. pixels.</p>
                <p>Each photo pixel uses binary data to determine the color that the pixel will represent. The number of bits used 
                    to store each pixel is called the color depth. Images with more colors need more pixels to store each color. 
                    If we use one bit per pixel, there are only two color options per pixel, if we use two bits per pixel, we have four 
                    color options, 3 bits per pixel makes 8 color options, etc. Images that use lots of colors are stored in larger 
                    files.</p>
                <p>Text is also represented in binary. Text uses a code called ASCII. ASCII represents each character as a binary 
                    number. For example, the letter 'a' is the binary number 01100001 (the decimal system number 97). This system 
                    also includes special characters, punctuation, and a differentiation between uppercase and lowercase letters.</p>
                <p>In summary, everything on a computer is understood by the computer in binary, even code!</p>
            </div>
        );
    }
}

export default TaskFourSubpage;
