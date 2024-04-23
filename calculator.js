document.addEventListener("DOMContentLoaded", function() {
    let expression = '';
    const resultField = document.getElementById('result');
  
    function addToExpression(value) {
      expression += value;
      resultField.value = expression;
    }
  
    function clearResult() {
      expression = '';
      resultField.value = expression;
    }
  
    function calculateResult() {
      try {
        const result = eval(expression);
        resultField.value = result;
        expression = '';
      } catch (error) {
        resultField.value = 'Error';
      }
    }
  
    document.getElementById('btn0').addEventListener('click', () => addToExpression('0'));
    document.getElementById('btn1').addEventListener('click', () => addToExpression('1'));
    document.getElementById('btn2').addEventListener('click', () => addToExpression('2'));
    document.getElementById('btn3').addEventListener('click', () => addToExpression('3'));
    document.getElementById('btn4').addEventListener('click', () => addToExpression('4'));
    document.getElementById('btn5').addEventListener('click', () => addToExpression('5'));
    document.getElementById('btn6').addEventListener('click', () => addToExpression('6'));
    document.getElementById('btn7').addEventListener('click', () => addToExpression('7'));
    document.getElementById('btn8').addEventListener('click', () => addToExpression('8'));
    document.getElementById('btn9').addEventListener('click', () => addToExpression('9'));
  
    document.getElementById('btnAdd').addEventListener('click', () => addToExpression('+'));
    document.getElementById('btnSubtract').addEventListener('click', () => addToExpression('-'));
    document.getElementById('btnMultiply').addEventListener('click', () => addToExpression('*'));
    document.getElementById('btnDivide').addEventListener('click', () => addToExpression('/'));
    document.getElementById('btnClear').addEventListener('click', clearResult);
    document.getElementById('btnEquals').addEventListener('click', calculateResult);
  });
  