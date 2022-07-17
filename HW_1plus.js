// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
// // let age_1 = 17
let age_2 = 18
let age_3 = 60

// const checkAge = function(age_1) {

//     if(age_1 < age_2){
//         console.log( "You don’t have access cause your age is " + age_1 + " It’s less then " + age_2)
//     } else if( age_1 >= age_2, age_1 < age_3){
//     console.log("Welcome!")
//     } else if (age_1 > age_3){
//     console.log("Keep calm and look Culture channel")
//     } else {
//         console.log("Technical work")
//     }
//     }

// checkAge(17)
// checkAge(18)
// checkAge(61)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.


// const checkAgeType = function(age){
//     if ( typeof(age) != Number){
//         console.log("Sorry, please enter your age with numbers")
//             }
// }
const checkAgeNumber = function(age_1) {

    if ( typeof(age) != Number){
          
                 
    if(age_1 < age_2){
        console.log( "You don’t have access cause your age is " + age_1 + " It’s less then " + age_2)
    } else if( age_1 >= age_2, age_1 < age_3){
    console.log("Welcome!")
    } else if (age_1 > age_3){
    console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
    
    }else {
        console.log("Sorry, please enter your age with numbers")
    }
}

checkAgeNumber(17)
checkAgeNumber(18)
checkAgeNumber(61)
checkAgeNumber(12)
checkAgeNumber("jhjhk")


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке