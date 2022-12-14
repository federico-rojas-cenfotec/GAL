const div = (attributes, parent) => {
    return tag('div', attributes, parent);
}

const p = (attributes, parent) => {
    return tag('p', attributes, parent);
}

const a = (attributes, parent) => {
    return tag('a', attributes, parent);
}

const image = (attributes, parent) => {
    return tag('img', attributes, parent);
}

const label = (attributes, parent) => {
    return tag('label', attributes, parent);
}

const input = (attributes, parent) => {
    return tag('input', attributes, parent);
}

const btn = (attributes, parent) => {
    return tag('button', attributes, parent);
}

const tag = (type, attributes, parent) => {
    var element = document.createElement(type);
    if (parent) {
        parent.appendChild(element);
    }

    for (const key in attributes) {
        element[key] = attributes[key]; /* bracket notation element[key] es igual a element.key siendo key un determinado atributo */
    }
    return element;
}