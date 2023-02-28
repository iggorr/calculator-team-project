```
Number = 0
Result = 0
Action = ""
Equals = False

Print Number


Press digit (0-9)
    If Number == 0
	    Number = Digit

    Else	
	    Append to Number

    Print Number	


Press "."
    If Number doesn't have "." already
        Append to Number
        Print Number


Press C
    Number = 0
    Print Number


Press AC?


Press operator (+, -, *, /)
    If Action == ""
        If Equals == True
            Equals = False
        Else
            Result = Number

    Else
        Result = Result (action) Number
        Print Result
    
    Number = 0
    Update Action


Press "="
    If Action != ""
        Result = Result (action) Number
        Print Result

        Number = 0
        Action = ""
        Equals = True
```