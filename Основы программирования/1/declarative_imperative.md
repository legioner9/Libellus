[Основные принципы программирования: императивное и декларативное программирование](tproger.ru/translations/imperative-declarative-programming-concepts/)

imperative : 

    function double (arr) {
    let results = []
    for (let i = 0; i < arr.length; i++){
        results.push(arr[i] * 2)
    }
    return results
    }

declarative (up lower over imperative) :

    function double (arr) {
    return arr.map((item) => item * 2)
    }