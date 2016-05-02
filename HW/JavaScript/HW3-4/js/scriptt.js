var Page = {
    BODY_INNER_WRAPPER:
    '<div class="row">\n'+
    '    <div class="col-lg-12">\n'+
    '        <h4>Тест по программированию</h4>\n'+
    '        <form action="#" class="test-form">\n'+
    '            <div class="form-group btn-gr">\n'+
    '                <input type="submit" value="Проверить мои результаты" class="btn btn-default">\n'+
    '            </div>\n'+
    '        </form>\n'+
    '    </div>\n'+
    '</div>\n',

    createContainer: function () {
        var Element = document.createElement('div');
        Element.innerHTML = this.BODY_INNER_WRAPPER;
        Element.classList.add('container');
        return Element;
    },

    createControlGroup: function (classes) {
        var Element = document.createElement('div');
        Element.classList.add(classes);
        return Element;
    },

    createControls: function (parentElement) {
        var currentElement, label, checkBox, textNode;
        for (var i = 1; i <= 3; i++) {
            currentElement = document.createElement('p');
            currentElement.innerHTML = 'Вопрос №'+i;
            parentElement.appendChild(currentElement);
            for (var j = 1; j <= 3; j++) {
                currentElement = parentElement.appendChild(document.createElement('div'));
                currentElement.classList.add('radio');
                label = currentElement.appendChild(document.createElement('label'));
                checkBox = label.appendChild(document.createElement('input'))
                checkBox.setAttribute('type', 'checkbox');
                textNode = label.appendChild(document.createTextNode('Вариант ответа №'+j));
            }
        }
    },

    createContent: function (parentElement) {
        var containerElement = Page.createContainer();
        var formControls = Page.createControlGroup('form-group');
        Page.createControls(formControls);
        var formElement = containerElement.querySelector('.test-form');
        formElement.insertBefore(formControls, formElement.firstChild);
        parentElement.insertBefore(containerElement, parentElement.firstChild);
    }
}

Page.createContent(document.body);
