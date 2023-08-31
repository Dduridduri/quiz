const QuizList = [
  {
    id : 1,
    question : "HTML의 의미를 보기에서 고르세요",
    answer : "Hyper Text Markup Language",
    view : {
      number1:"Hyper Text Markup Language",
      number2:"Hyperlinks and Text Markup Language",
      number3:"Home Tool Markup Language",
      number4:"Hyperlinks Tool Markup Language"
    },
    hint:"하이퍼텍스트 마크업 언어입니다.",
    type: "html",
    
  },
  {
    id : 2,
    question : "다음 중 HTML5에서 도입된 폼 관련 요소가 아닌 것은 무엇일까요?",
    answer : '<form method="post">',
    view : {
      number1:'<input type="email">',
      number2:'<input type="range">',
      number3:'<form method="post">',
      number4:'<select multiple>'
    },
    hint:'',
    type: 'html',
    
  },
  {
    id : 3,
    question : "데이터 테이블 마크업 정보를 표 형태로 나타내기 위해 사용되는 HTML 태그와 속성 조합으로 올바른 것은 무엇일까요?",
    answer : '<table>, <tr>, <td>',
    view : {
      number1:'<table>, <tabular>',
      number2:'<datatable>, <data>',
      number3:'<table>, <tr>, <td>',
      number4:'<grid>, <row>, <cell>'
    },
    hint:'',
    type: 'html',
    
  },
  {
    id : 4,
    question : "CSS 후손 선택자 다음 중 후손 선택자를 나타내는 올바른 방법은 무엇일까요?",
    answer : '~',
    view : {
      number1:'>',
      number2:'+',
      number3:'~',
      number4:'&'
    },
    hint:'',
    type: 'css',
    
  },
  {
    id : 5,
    question : "CSS 애니메이션 CSS를 사용하여 요소에 애니메이션을 추가하는 속성은 무엇일까요?",
    answer : 'animation',
    view : {
      number1:'transition',
      number2:'transform',
      number3:'animation',
      number4:'interpolate'
    },
    hint:'',
    type: 'css',
    
  },
  {
    id : 6,
    question : "CSS 변수(커스텀 프로퍼티) 선언 CSS 변수를 선언하는데 사용되는 기호는 무엇일까요?",
    answer : '--',
    view : {
      number1:'#',
      number2:'@',
      number3:'&',
      number4:'--'
    },
    hint:'',
    type: 'css',
    
  },
  {
    id : 7,
    question : "JavaScript에서 반복문을 사용하여 배열의 각 요소를 순회하는 방법 중 맞는 것은 무엇일까요?",
    answer : 'for (let element of array) { ... }',
    view : {
      number1:'for (element in array) { ... }',
      number2:'for (let element of array) { ... }',
      number3:'foreach (element : array) { ... }',
      number4:'while (element = array.next()) { ... }'
    },
    hint:'',
    type: 'js',
    
  },
  {
    id : 8,
    question : "JavaScript 객체의 속성에 접근하는 방법 중 올바른 것은 무엇일까요?",
    answer : 'object.property',
    view : {
      number1:'object.property',
      number2:'property.object',
      number3:'object->property',
      number4:'object[property]'
    },
    hint:'',
    type: 'js',
    
  },
  {
    id : 9,
    question : "JavaScript에서 함수를 선언하는 방법 중 맞는 것은 무엇일까요?",
    answer : 'function = myFunction() { ... }',
    view : {
      number1:'function = myFunction() { ... }',
      number2:'func myFunction() => { ... }',
      number3:'function myFunction() { ... }',
      number4:'myFunction() => function { ... }'
    },
    hint:'',
    type: 'js',
    
  },
  

]


export default QuizList;