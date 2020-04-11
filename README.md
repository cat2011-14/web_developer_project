# web_developer_project
Проекты при изучении HTML, CSS, JavaScript, React

## 5.JavaScript: Arrays, Loops, and Objects



### Scope
Область действия определяет, где переменные могут быть доступны или ссылки. В то время как некоторые переменные могут быть доступны из любого места в программе, другие переменные могут быть доступны только в определенном контексте.

#### Blocks and Scope
Блок - это код, который находится внутри набора фигурных скобок {}. Блоки помогают нам сгруппировать один или несколько операторов и служат важным структурным маркером для нашего кода.

Блок кода может быть функцией, например так:
```
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
```
#### Global Scope
Область действия - это контекст, в котором объявлены наши переменные. Мы думаем об области действия по отношению к блокам, потому что переменные могут существовать вне или внутри этих блоков. 

В глобальной области видимости переменные объявляются вне блоков. Эти переменные называются глобальными переменными . Поскольку глобальные переменные не связаны внутри блока, к ним может обращаться любой код в программе, включая код в блоках.

```
const color = 'blue'

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue
```
#### Block Scope (область видимости блока)
Когда переменная определена внутри блока, она доступна только коду в фигурных скобках {}. Мы говорим, что переменная имеет область видимости блока, потому что она доступна только для строк кода в этом блоке.

Переменные, которые объявлены с областью действия блока, известны как локальные переменные, потому что они доступны только для кода, который является частью того же блока.

```
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

logSkyColor(); // blue 
console.log(color); // ReferenceError
```
#### Scope Pollution
Загрязнение области действия - это когда у нас слишком много глобальных переменных, которые существуют в глобальном пространстве имен, или когда мы повторно используем переменные в разных областях. Загрязнение области действия затрудняет отслеживание наших различных переменных и настраивает нас на возможные аварии. Например, глобальные переменные могут сталкиваться с другими переменными, имеющими более локальную область, вызывая неожиданное поведение в нашем коде.

```
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100
```
Область видимости блоков - это мощный инструмент в JavaScript, поскольку он позволяет нам точно определять переменные, а не загрязнять глобальное пространство имен. Если переменная не должна существовать вне блока - этого не должно быть!



### Array
```
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
```
Массивы - это способ создания списков в JavaScript. Массивы могут хранить любые типы данных (включая строки, числа и логические значения). Как и списки, массивы упорядочены, то есть каждый элемент имеет номерную позицию.

#### Create an Array
Один из способов создать массив - использовать литерал массива . Литерал массива создает массив, заключая элементы в квадратные скобки []. Помните из предыдущего упражнения, массивы могут хранить любой тип данных - у нас может быть массив, который содержит все те же типы данных, или массив, который содержит разные типы данных.

#### Accessing Elements
Каждый элемент в массиве имеет номерную позицию, известную как его индекс . Мы можем получить доступ к отдельным элементам, используя их индекс, который аналогичен ссылке на элемент в списке на основе позиции элемента.

Массивы в JavaScript индексируются нулем , то есть позиции начинают отсчитываться с, 0а не с 1.

```
const hello = 'Hello World';
console.log(hello[6]);
// Output: W
```
#### Update Elements
Получив доступ к элементу в массиве, вы можете обновить его значение.
```
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
```

#### Arrays with let and const
Вы можете вспомнить , что вы можете объявлять переменные с как let и const ключевыми словами. Переменные, объявленные с, let могут быть переназначены.

Переменные, объявленные с const ключевым словом, не могут быть переназначены. Тем не менее, элементы в массиве, объявленном с, const остаются изменяемыми. Это означает, что мы можем изменить содержимое const массива, но не можем переназначить новый массив или другое значение.

#### The .length property
Одним из встроенных свойств массива является length и он возвращает количество элементов в массиве. Мы .length получаем доступ к свойству так же, как и со строками.

```
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2
```
#### The .push() Method
метод, .push()позволяет нам добавлять элементы в конец массива. 
```
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
```
#### The .pop() Method
метод массива .pop()удаляет последний элемент массива.
```
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
```
#### More Array Methods
Вы можете прочитать обо всех методах массива, имеющихся в документации по массиву Mozilla Developer Network (MDN) .
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Однако бывают случаи, когда мы не хотим изменять исходный массив, и мы можем использовать методы неизменяемого массива. Обязательно проверьте MDN, чтобы понять поведение используемого вами метода.

Некоторые методы массивов, которые доступны для разработчиков JavaScript включают в себя: .join(), .slice(), .splice(), .shift(), .unshift(), и .concat()среди многих других. Использование этих встроенных методов облегчает выполнение некоторых общих задач при работе с массивами.

#### Arrays and Functions
```
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
```
когда вы передаете массив в функцию, если массив видоизменен внутри функции, это изменение будет сохраняться и вне функции. Вы также можете увидеть эту концепцию, объясненную как переход по ссылке, поскольку то, что мы на самом деле передаем функции, является ссылкой на место хранения переменной памяти и изменения памяти.

#### Nested Arrays
Когда массив содержит другой массив, он называется вложенным массивом .
```
const nestedArr = [[1], [2, 3]];
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```
Чтобы получить доступ к вложенным массивам, мы можем использовать скобочную нотацию со значением индекса, как мы это делали для доступа к любому другому элементу. 

### Loop
Цикл является инструментом программирования , который повторяет набор команд до тех пор , указанное условие, называемое условием остановки достигается. 

Циклы позволяют нам создавать эффективный код, который автоматизирует процессы для создания масштабируемых, управляемых программ.

Когда условие выполнено, цикл останавливается, и компьютер переходит к следующей части программы.

#### The For Loop
Вместо того, чтобы писать один и тот же код снова и снова, циклы позволяют нам сказать компьютерам повторять данный блок кода самостоятельно. Один из способов дать компьютерам эти инструкции - использовать forцикл.

Типичный forцикл включает переменную итератора, которая обычно появляется во всех трех выражениях. Переменная итератора инициализируется, проверяется на соответствие условию остановки и назначается новое значение на каждой итерации цикла. Переменные итератора могут иметь любое имя, но рекомендуется использовать описательное имя переменной.

for Цикл содержит три выражения , разделенных ; внутри скобок:

1)инициализации запускают цикл , а также могут быть использованы для объявления переменного итератора.

2)условие остановки является условием , что переменная - итератор оценивается against- , если условие принимает значение trueблока кода будет работать, и если он вычисляет falseкод остановится.

3)оператор итерации используется для обновления переменной итератора в каждом цикле.

```
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
```

#### Looping through Arrays
for циклы очень удобны для перебора структур данных. Например, мы можем использовать forцикл для выполнения одной и той же операции над каждым элементом массива. Массивы содержат списки данных, такие как имена клиентов или информация о продукте. 
```
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
```

#### Nested Loops
Когда у нас есть цикл, работающий внутри другого цикла, мы называем это вложенным циклом . Одним из способов использования вложенного forцикла является сравнение элементов в двух массивах. Для каждого раунда внешнего forцикла внутренний forцикл будет работать полностью.

```
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
```
#### The While Loop
Синтаксис for цикла идеален, когда мы знаем, сколько раз цикл должен выполняться, но мы не всегда знаем это заранее.
```
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
```
#### Do...While Statements
В do...while заявлении говорится, что нужно выполнить задачу один раз, а затем продолжать ее, пока не будет выполнено указанное условие.
```
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);
```
Обратите внимание, что while и do...while цикл отличаются! В отличие от while цикла, он do...while будет запущен хотя бы один раз, независимо от того , выполнено ли условие true.
```
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
```

#### The break Keyword
В нашем коде, когда мы хотим остановить выполнение цикла, даже если исходное условие остановки, которое мы написали для нашего цикла, не было выполнено, мы можем использовать ключевое слово break.

break Ключевое слово позволяет программы «сломать» из цикла внутри блока передачи контура в.
```
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');
```
### Iterators
Мы также собираемся узнать о другом способе добавления уровня абстракции к нашему программированию: функции высшего порядка . Функции высшего порядка - это функции, которые принимают другие функции в качестве аргументов и / или возвращают функции в качестве выходных данных. Это позволяет нам создавать абстракции на других абстракциях, так же как «Мы ​​устроили вечеринку по случаю дня рождения» - это абстракция, которая может основываться на абстракции «Мы сделали торт».

#### Functions as Data
Функции JavaScript ведут себя как любой другой тип данных в языке; мы можем назначать функции переменным, и мы можем переназначать их новым переменным.

```
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
```
 Мы можем переназначить функцию переменной с подходящим коротким именем:
 ```
 const  busy  =  announceThatIAmDoingImportantWork ; занят ( ) ; // Этот вызов функции практически не занимает места!
 ```
 В JavaScript функции являются объектами первого класса . Это означает, что, как и другие объекты, с которыми вы столкнулись, функции JavaScript могут иметь свойства и методы.

Поскольку функции являются типом объекта, они имеют свойства, такие как .lengthи .nameи методы, такие как .toString(). Вы можете узнать больше о методах и свойствах функций в документации .
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

#### Functions as Parameters
можем передавать функции (в другие функции) в качестве параметров. Функция более высокого порядка - это функция, которая принимает функции в качестве параметров, возвращает функцию или и то, и другое! Мы вызываем функции, которые передаются как параметры, и вызывают функции обратного вызова, потому что они вызываются во время выполнения функции высшего порядка.

Когда мы передаем функцию в качестве аргумента другой функции, мы не вызываем ее. Вызов функции приведет к возвращаемому значению этого вызова функции. С помощью обратных вызовов мы передаем саму функцию, набирая имя функции без круглых скобок (что приведет к результату вызова функции):
```
const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);
```
```
timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});
```
#### iterators
также есть доступ к встроенным методам массива, которые облегчают зацикливание.

Встроенные методы массива JavaScript, которые помогают нам выполнять итерации, называются итерационными методами , иногда называемыми итераторами . Итераторы - это методы, вызываемые в массивах для управления элементами и возвращаемыми значениями.

Обратите внимание на различные методы, вызываемые в массивах:

.forEach()
.map()
.filter()

#### Метод .forEach ()
Точно названный, .forEach() выполнит тот же код для каждого элемента массива.

.forEach()перебирает массив и выполняет функцию обратного вызова для каждого элемента. Во время каждого выполнения текущий элемент передается в качестве аргумента функции обратного вызова.
Возвращаемое значение для .forEach()всегда будет undefined.
Другой способ передать обратный вызов для .forEach()- использовать синтаксис функции стрелки.

```
groceries.forEach(groceryItem => console.log(groceryItem));
```
Мы также можем заранее определить функцию для использования в качестве функции обратного вызова.
```
function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);
```
#### The .map() Method
Когда .map()вызывается для массива, он принимает аргумент функции обратного вызова и возвращает новый массив
```
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});
```
.map()работает аналогично .forEach()- главное отличие в том, что .map()возвращает новый массив.

#### The .filter() Method
Тем не менее, .filter()возвращает массив элементов после фильтрации определенных элементов из исходного массива. Функция обратного вызова для .filter()метода должна возвращаться trueили falseзависеть от элемента, который ему передан. Элементы, которые вызывают функцию обратного вызова true, добавляются в новый массив. 
```
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});
```
#### The .findIndex() Method
Иногда нам нужно найти местоположение элемента в массиве. Вот где .findIndex()метод приходит! Вызов .findIndex()массива вернет индекс первого элемента, который оценивается trueв функции обратного вызова.
```
const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
```
Если в массиве нет ни одного элемента, удовлетворяющего условию обратного вызова, он .findIndex()вернется -1.

