import {createDate} from "./createDate";

export const formatDate = (date: Date, format: string) => {

    let array = ["147.13", "20.11", "40.99", "13.06", "255", "189"]; // инициализируем переменную, содержащую массив строковых значений
    let outputValues = array.map(val => parseFloat(val) // принимаем строку в качестве аргумента и возвращаем десятичное число
        .toFixed(2) // возвращаем строковое представление числа в нотации с фиксированной запятой (2 знака после запятой)
        .padStart(10) // дополняем слева текущую строку пробельными символами до заданной длины
        .padEnd(14, " RUR")); // дополняем справа текущую строку переданными символами до заданной длины

    console.log(outputValues.join("\n"));


    const d = createDate({date})
    return format
        .replace(/\bYYYY\b/, d.year.toString())
        .replace(/\bDD\b/, d.year.toString().padStart(2, "0"))//padStart(10,".") дополняет строку  .....value
        .replace(/\bYYYY\b/, d.year.toString());
};
