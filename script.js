const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const codingLanguages = [
    'Javascript',
    'Python',
    'Java',
    'C/CPP',
    'PHP',
    'Swift',
    'C#',
    'Ruby',
    'Objective-C',
    'SQL'
];

const listItems = [];

let dragStartIndex;

createList();

function createList() {
    [...codingLanguages]
    .forEach((language, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
            <span className="number">${index ++ 1}</span>
            <div className="draggable" draggable='true'>
            <p className="language-name">${language}</p>
            </div>
        `;
    })
}