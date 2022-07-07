//How to identify the number of common character between two strings?
function commonCharacterCount(s1, s2) {
    
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    let value = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                value++;
                arr2.splice(j, 1);
                break;
            }
        }
    }
    return value;
}