// IIFE bu kod yozilishi bn ishga yushdi va odatda tashqaridan xafni oldini olish yanoi tashqariga ma'lumot uzatib bermaydi 
//
// (function(){
//    const res = prompt("Yoshinginni kiriting");
//    console.log(res);
// })();
//bunday holatda foydalanuvchi saitga kirganda undan ma'lumot olish uchun qilsak boladi iifd da 

//2-pure function
let res = [1,2,3,4,5,6,7,8]
//Sonlardan iborat massivni qabul qilib, ularning juft sonlarini filter qiladigan funksiya yozing.
//  function deletJuft(arr){
//    return arr.filter(valeu => {
//       return valeu%2==1
//    })
//  };
//  console.log(deletJuft(res));

//Massivdagi barcha elementlarning yig'indisini hisoblovchi funksiya yozing.
// function addSum(arr){
//    let res = 0;
//    arr.forEach(valeu => {
//       res += valeu
//    });
//    return res;
// };
// console.log(addSum(res));

//Istalgan sonning 5-darajasini topuvchi funksiya yozing
// const findNumbersFive = (a) => a**5;
// console.log(findNumbersFive(3));

//Pure fnction bu ozgaruvchisi bn qiymati bir hil bolishi va tashqi ta'sirlarga ucramasligi






//Obektarga oid masalalar HAMMA KORINISH BITTA UZGARUVCHIDA
// const person = {
//     name: 'John',
//     age: 45,
//     phone: "+998911098019"
// };
//console.log(Object.keys(person));   //// kalitlaridan iborat massiv yasaydi
//console.log(Object.values(person));    //// qiymatlaridan iborat massiv yasaydi
//console.log(Object.entries(person));   // kalit va qaymatdan massiv yasaydi alohida qilib
//console.log(Object.freeze(person));    //muzlatib qoyadi uzidan keyingi malumot qoshilsa
//person.name = 'Abdurahmon'



// MASALALAR

//1-MASALA
// const arr1 = [1, 2, 3, 4, 5, 6, 7];

// const findThreeMidle = (arr) => {
//    const number = arr.length;
//    const number2 = number/2;
//    return arr.slice(number2 - 1, number2 + 2);
// };
// console.log(findThreeMidle(arr1));

//3. **Concat method:**. 3 ta massivni birlashtiradigan funksiya yozing. Bunda uchunchi massiv o’rtada birinchi massiv oxirida bo’lsin. 

// const useConcat = (arr1, arr2, arr3) => (arr2.concat(arr3, arr1));
// console.log(useConcat([1,2,3],[3,4,5],[6,7,8]));

//4. **IndexOf method:**. Shunday funksiya yaratingki 2 ta argument qabul qilsin. 1-si massiv, ikkinchisi qiymat, Agar berilgan qiymat, berilgan massivning ichida mavjud bo’lsa ushbu elementning indeksining kubini qaytarsin aks holda false qiymat qaytarsin.

// function findIndex(arr,element){
//    let res = arr.indexOf(element);
//    if (res !== -1){
//      return  Math.pow(res,3)
//    }
//    return false;
// };
// console.log(findIndex([1,2,3,4,5],4));

//5. **LastIndexOf method:**
//- Berilgan massiv va qidiriladigan element berilgan bo'lsin. Massivda qidiriladigan elementning oxirgi indeksini qaytaradigan funksiya yozing.

// const findIndexLast = (arr, element) => (arr.lastIndexOf(element));
// console.log(findIndexLast([1,2,3,4,5,34,53,3], 3));

//6. **Concat and IndexOf combined:**
//- Ikki massiv berilgan bo'lsin va qidiriladigan element berilgan bo'lsin. Agar berilgan qiymat ikkala massivda ham mavjud bo’lsa true aks holda false qiymat qaytaradigan funksiya yarating

// function findIndexSmilar(arr1,arr2, element){
//    let res = arr1.indexOf(element);
//    let rezalt = arr2.indexOf(element);
//    if (res >= 0 && rezalt >= 0){
//       return true
//    };
//    return false;
// }
// console.log(findIndexSmilar([1,2,3,4,5],[4,5,6,5,4,32,8], 5));

//7. **Includes method:**
//- Berilgan massiv va qidiriladigan element berilgan bo'lsin. Massivda qidiriladigan elementni qidiring va natijani `true` yoki `false` ko'rinishida qaytaring.

// const useIncludes = (arr,element) => (arr.includes(element));
// console.log(useIncludes([1,2,3,4,5,6], 6)); 

//8-masala **ForEach method:**. Sonlardan iborat massiv ichidan 3 xonali toqlarining o’rtachasini topuvchi funksiya yozing.

// function findIndexMidleNumber(arr){
//    let res = [];
//    arr.forEach(valiue =>{
//       if(valiue>=100 && valiue<1000){
//          res.push(valiue)
//       }
//    })
//    let middle = 0;
//    for (const i of res){
//         middle += i 
//    }
//    return middle/3;
// }
// console.log(findIndexMidleNumber([100,23,56,200,300]));

//9. **Map method:**. Berilgan sonlardan iborat massivni shunday o’zgartiradigan funksiya yozingki eski massiv toq elementlari kublaridan iborat va juft elementlari kvadratlaridan iborat yangi massiv qaytarsin.

// function createArr(arr){
//    return arr.map(valeu => {
//       if(valeu%2==0){
//          return Math.pow(valeu, 2)
//       } else{
//         return Math.pow(valeu, 3)
//       }
     
//    });
    
// };
// console.log(createArr([1,2,3,4,5,6]));

//10. **Map method:**. Shunday funksiya yaratingki argumentiga yozuvlardan iborat massiv qabul qilsin. Va u berilgan yozuvning oxirgi elementlaridan iborat yangi massiv qaytarsin.

// function useMap(arr){
//   return arr.map(valeu => valeu.slice(-1));
// };
//console.log(useMap(['salom', 'nimagaplar', 'osh']));

//Arr functin
// const useMap = (arr) => arr.map(valeu => valeu.slice(-1))
// console.log(useMap(['salom', 'nimagaplar', 'osh']));

//11. **Filter method:**. Shunday funksiya yaratingki u yozuvlardan iborat massiv qabul qilsin. Berilgan massiv elementlari orasidan belgilari soni 4 tadan kamlaridan iborat yangi massiv hosil qilsin.
//  const useFilter = (arr) => arr.filter(valeu => valeu.length > 4);
//  console.log(useFilter(['salom', 'nimagaplar', 'osh']));

//12. **Some method:**. Shunday funksiya yaratingki u obyektlardan iborat massiv qabul qiladi. Ushbu massiv elementlari orasidan yoshi 18 dan kattalari bor yoki yo’qligini aniqlab bersin.Massiv quyiagicha ko’rinishda bo’ladi
// const user = [
//    {name: 'Jahon', age: 5},
//    {name: 'Doe', age: 20},
//    {name: 'Alex', age: 30}
// ];


// function findOldUser(arr){
//    let res = arr.some(valeu => {
//       return  valeu.age > 18
//    });
//    if (res){
//       console.log('Katta yoshdagi balalar mavjud');
//    }
// };
// console.log(findOldUser(user));

//13. **Every method:**. O’zbekcha ismlardan iborat massiv qabul qiladigan funksiya yarating. Agar ushbu ismlar har biri “jon” bilan tugaydigan bo’lsa true aks holda false qiymat qaytarsin.
// function uzbName(arr){
//    return arr.every(value => {
//       return value.endsWith('jon')
//    });
// };
// console.log(uzbName(['Muhammadjon', 'akmaljon', 'Ilyosjon']));

//QISQA KORINISH
// const uzbNameArr = (arr) => arr.every(valeu => valeu.endsWith('jon'));
// console.log(uzbNameArr(['Muhammadjon', 'akmaljon', 'Ilyosjon']));


//14. **Find method:**. Sonlardan iborat massiv ichidan 3 xonali hamda 5 ga karrali birinchi elementni topadigan funksiya yarating.

// function findFive(arr){
//    return arr.find(valeu => valeu%5==0 && valeu>=100 && valeu<1000);
// };
// console.log(findFive([55,100,200,300,544635]));

//QISQA KORINISH
// const findFive = (arr) => arr.find(valeu => valeu%5==0 && valeu>=100 && valeu<1000);
// console.log(findFive([55,100,200,300,544635]));


//15. **FindIndex method:**. Ismlardan iborat massiv elementlari orasidan ichida “bek” degan qismi mavjud bo’ladigan birinchi duch keladigan so’zning indeksini qaytaruvchi funksiya yarating.

// const findBek = (arr) => arr.findIndex(name => name.includes('bek'));
// console.log(findBek(['Muhammadjon','Omadbek', 'akmaljon','Ahrorbek', 'Ilyosjon']));

