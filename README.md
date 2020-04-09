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
### Global Scope
Область действия - это контекст, в котором объявлены наши переменные. Мы думаем об области действия по отношению к блокам, потому что переменные могут существовать вне или внутри этих блоков. 

В глобальной области видимости переменные объявляются вне блоков. Эти переменные называются глобальными переменными . Поскольку глобальные переменные не связаны внутри блока, к ним может обращаться любой код в программе, включая код в блоках.

```
const color = 'blue'

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue
```
