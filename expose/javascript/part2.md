question 1: line 12 would print '3' because it is referring to the var variable i
which is defined in the for loop but it is still accessible anywhere in the function.
When the for loop terminates i = 3 , so line 12 prints 3

question 2: line 13 would print '150' because it is referring to the var variable discountedPrice
which is defined in the for loop but it is still accessible anywhere in the function. When the for loop terminates discountedPrice = 150, so line 12 prints 150

question 3: line 14 would print '150' because it is referring to the var variable finalPrice
which is defined at the top of the function and is still accessible anywhere in the function. When the for loop terminates finalPrice = 150, so line 14 prints 150

question 4: this function returns the array [50, 100, 150] because the for loop loops through each given price in the prices array [100, 200, 300], applies the discount (50%) and rounds it to the nearest whole integer and then adds it to the discounted array which is returned. And the variable discounted is of var type so it wont throw any errors.

question 5: line 12 will throw an error because the variable i is of let type which is only accesible within the code block it was defined in, so you cannot refer to i outside of the for loop

question 6: line 13 will throw an error because variable discountedPrice is of let type which is only accesible within the code block it was defined in, so you cannot refer to discountedPrice outside of the for loop

question 7: line 14 will print 150 because finalPrice is of let type but it is declared at the top of the function and referred to within that same code block

question 8: this function will return this array [50, 100, 150] , the variable discounted is of let type but it is declared at the top of the function, and referenced inside of the same code block. The for loop loops through each given price in the prices array [100, 200, 300], applies the discount (50%) and rounds it to the nearest whole integer and then adds it to the discounted array which is returned.

question 9: line 11 will throw an error because the variable i is of let type which is only accesible within the code block it was defined in, so you cannot refer to i outside of the for loop

question 10: line 12 will print 3 because it declares the variable length of const type at the top of the function to be the length of the prices array, which is given to be [100, 200, 300] so length = 3 . And because it is const it cannot be reassigned, which it isn't, so line 12 prints 3

question 11: This function will return an error because disconted is a const array declared at the beginning of the function, but it is updated in the for loop which is not allowed. You can't reassign const variables, so the function will throw an error. 

question 12: 
    A. alert(student.name);
    B. alert(student["Grad Year"]);
    C. alert(student.greeting);
    D. alert(student['Favorite Teacher'].name);
    E. alert(student.courseLoad[0]);

question 13: 
    A. '32' , since '3' is a string javascript converts the 2 into a string and concatenates them together
    B. 1 , now '3' is converted to an integer and javascript performs mathematical subtraction 3-2 =1
    C. 3 , in arithmetic operations null is converted to 0
    D. '3null' , because '3' is a string, javascript converts null to a string and performs concatenation 
    E. 4 , 'true' is converted to 1 in arithmetic operations, so now it becomes 1 + 3 = 4
    F. 0 , both false and null are converted to 0 in arithmetic operations, so it becomes 0 + 0
    G. '3undefined' , because '3' is a string javascript converts undefined into a string and preforms concatenation
    H. NaN , since it is subtraction javascript tries to convert both '3' and undefined into a number but undefined gtes converted to NaN which is a special numeric value

question 14: 
    A. true , '2' is a string andconverted to an integer 2 and 2 > 1
    B. false, compares the strings lexicographically, and immedietly 2 is greater than 1
    C. true, the second operand '2' is a string and is converted to an integer, and 2 == 2
    D. false, the strict equality check does not perform type conversion and 2 and '2' are different types
    E. false, true is converted to the integer 1 and 1 does not equal 2
    F. true, Boolean(2) evaluates to true which is of boolean type but the other operand true is a boolean literal, so with the strict equality check they are not the same 

question 15: == is a regular equality check while === is a strict equality check. The strict equality check checks the equality without type conversion, if a and b are different types than  a===b returns false without trying to convert them. A regular equality check does do type conversion before comparing.  

question 17: the result will be [2, 4, 6] . first modifyArray is called passing through [1, 2, 3] as the array parameter and the function doSomething as the callback parameter. Then inside the modifyArray function, a new const type array is initiallized called newArr. Then, theres a for loop that loops through each element in the array that was passed through ([1, 2, 3]) and calls doSomething on it. The function doSomething just doubles the number that is passed through to it. After modifyArray calls doSomething onto the element it adds it to newArr. So, with the way this function is called, it results in doubling each element in the orginal array, giving the result [2, 4, 6]