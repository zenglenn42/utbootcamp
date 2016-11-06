// ------------------------------------------------------
// File: controller.js
//
// Simple webapp calculator controller.
// ------------------------------------------------------

$(document).ready(calcController);

// Function: calcController
// Usage: $(document).ready(calcController);
// -----------------------------------------
// This callback function defines the controller 
// for our calculator.
//
// It ...
//
//  * responds to input button clicks from the user
//
//  * interfaces with the calc object model to push
//    input data and fetch calculated results
//
//  * updates the view / display by writing to
//    specific html elements addressed by ID attribute.

function calcController() {
    var mode = "production"; // "production" or "testing"
    handleUnitTests(mode);

    $(".number").on("click", numClicked);
    $(".operator").on("click", operatorClicked);
    $(".equal").on("click", equalClicked);
    $("#buttonClear").on("click", clearClicked);    
}

// Function: handleUnitTests
// Usage: handleUnitTest("testing");
// ---------------------------------
// When passed in a string argument of "testing",
// this function will unhide a test button which,
// when clicked, runs the unit tests for the calc
// object.

function handleUnitTests(mode) {
    if (mode === "testing") {

        // Enable  unit testing of calc object to ensure
        // model is still working when integrated into
        // the controller.

        $("#buttonTest").show();
        $("#buttonTest").on("click", function(){
            var passed = calc.runUnitTests();
            if (passed) {
                $("#result").text("Unit tests passed.");
            } else {
                $("#result").text("Unit tests failed.");
            }
        });

    } else { // production mode

        // Disable display of the test button in production mode.
        //
        // If we add new functionality to our calc model in the
        // future, we can easily re-run unit tests to make sure
        // new stuff works and existing functionality has not 
        // regressed ... all without having to change the controller
        // code.  Just temporarily update the mode variable
        // to "testing".

        $("#buttonTest").hide();
    }
}

// Function: numClicked
// Usage: $(".number").on("click", numClicked);
// --------------------------------------------
// This callback function responds to clicks of the
//
//  [ 1 ] [ 2 ] [ 3 ]
//  [ 4 ] [ 5 ] [ 6 ]
//  [ 7 ] [ 8 ] [ 9 ]
//
// buttons.
//
// Numbers are aggregated, digit-by-digit, into a
// num array within the calc object until an operator or
// equal sign button is pressed.  
//
// The separate array digits are then joined and converted to 
// a number for use in a subsequent calculations.

function numClicked() {
    console.log("numClicked");

    // Only respond to number clicks when we have a 
    // freshly loaded page or after user has pressed 'clear'.

    if (!calc.hasResult()) {

        // This method comes to life when the user clicks on
        // a number button.  We collect up individual digits
        // click-by-click into a number array held within the 
        // calc object.
        //
        // But to which operand should we apply /this/ digit
        // (i.e., firstNumber or secondNumber)?
        //
        // Since we expect input expressions of this form:
        //
        //  num1 [operator] num2 = result
        //
        // we can use the presence of the operator to signal
        // when the user has finished entering in the first number
        // and is now entering digits for the second number.

        var singleDigit = $(this).val();
        
        if (calc.hasOperator()) {
            // First number and operator have already been entered.
            // Any subsequent numbers events /should/ apply to
            // the second operand.
            console.log("numClicked: assuming digit is for secondNumber");
            $("#secondNumber").append(singleDigit);
        } else {
            // This must be a digit for the first operand since
            // user hasn't pressed an operator yet.
            console.log("numClicked: assuming digit is for firstNumber");
            $("#firstNumber").append(singleDigit);     
        }
        calc.num.push(singleDigit); 

    } else {
        console.log("numClicked: Ignoring input since we have a result.");
        console.log("numClicked: Reload or press 'clear' to allow input.");
    }
}

// Function: operatorClicked
// Usage: $(".operator").on("click", operatorClicked);
// ---------------------------------------------------
// This callback handles clicks of the 
//
//  [ + ]
//  [ - ]
//  [ * ]
//  [ / ]
//  [ ^ ]
//
// operator buttons.

function operatorClicked() {
    console.log("operatorClicked");

    var operatorValue = $(this).val();

    // Only respond to operator clicks when we
    // expect an operator.

    if (!calc.hasResult() && !calc.hasBothNumbers()) {
        switch(operatorValue) {
            case "plus":   $("#operator").append("+"); break;
            case "minus":  $("#operator").append("-"); break;
            case "times":  $("#operator").append("*"); break;
            case "divide": $("#operator").append("/"); break;
            case "power":  $("#operator").append("^"); break;
            default:
                console.log("operatorClicked: bad operator:", operatorValue);
                console.log("operatorClicked: punting")
                return;
                break;
        }
    } else {
        console.log("operatorClicked: ignoring input:", operatorValue);
        console.log("operatorClicked: not expecting an operator now");
        return;
    }
    calc.setOperator(operatorValue);
}

// Function: equalClicked
// Usage: $(".equal").on("click", equalClicked);
// ---------------------------------------------
// This callback function handles clicks of the 
//
//  [ = ]
//
// button.  
//
// Assuming two numbers and a valid operand
// have been previously passed into the calc object,
// this function invokes the calc.run() method to
// compute a number that is displayed in the 
// results section of the calculator view.

function equalClicked() {
    console.log("equalClicked");

    // Ignore equal sign clicks if a result is already
    // displayed.  Otherwise we'll get bogus double
    // display of the results. :-/

    if (!calc.hasResult()) {
        var result = calc.run();
        console.log("equalClicked: result: ", result);
        $("#result").append(result);
    } else {
        console.log("equalClicked: ignoring =");
        console.log("equalClicked: we already have a result displayed");
        console.log("equalClicked: click 'clear' for new calc");
    }
}

// Function: clearClicked
// Usage: $("#buttonClear").on("click", clearClicked);
// ---------------------------------------------------
// This callback function responds to clicks of the
//
//  [ clear ]
//
// button.
//
// It resets the internal state of the calc model
// as well as the front-end view of the calculator.

function clearClicked(){
    console.log("clearClicked");
    $("#result").empty();
    $("#operator").empty();
    $("#firstNumber").empty();
    $("#secondNumber").empty();
    calc.init();  // reset state of calc object
}