// Practice Problem 1

var fruits = ['Apple','Banana','Orange'];
console.log(fruits);

// a(i)
console.log(fruits.indexOf('Banana'));

// a(ii)
fruits[1] = 'Mango';
console.log(fruits);

// b(i)
fruits.pop();
console.log(fruits);

// b(ii)
fruits.push('Watermelon');
console.log(fruits);



// Practice Problem 2
var myResult = 85;
var tomResult = 66;
var janeResult = 95;
var peterResult = 56;
var johnResult = 40;


// My Grade
if(myResult >= 80){
    console.log('You got A')
}
else if(myResult >= 60){
    console.log('You got B')
}
else if(myResult >= 50){
    console.log('You got C')
}
else if(myResult >= 40){
    console.log('You got D')
}
else{
    console.log('You got F')
}

// Tom's Grade
if(tomResult >= 80){
    console.log('You got A')
}
else if(tomResult >= 60){
    console.log('You got B')
}
else if(tomResult >= 50){
    console.log('You got C')
}
else if(tomResult >= 40){
    console.log('You got D')
}
else{
    console.log('You got F')
}

// Jane's Grade
if(janeResult >= 80){
    console.log('You got A')
}
else if(janeResult >= 60){
    console.log('You got B')
}
else if(janeResult >= 50){
    console.log('You got C')
}
else if(janeResult >= 40){
    console.log('You got D')
}
else{
    console.log('You got F')
}

// Peter's Grade
if(peterResult >= 80){
    console.log('You got A')
}
else if(peterResult >= 60){
    console.log('You got B')
}
else if(peterResult >= 50){
    console.log('You got C')
}
else if(peterResult >= 40){
    console.log('You got D')
}
else{
    console.log('You got F')
}

// John's Grade
if(johnResult >= 80){
    console.log('You got A')
}
else if(johnResult >= 60){
    console.log('You got B')
}
else if(johnResult >= 50){
    console.log('You got C')
}
else if(johnResult >= 40){
    console.log('You got D')
}
else{
    console.log('You got F')
}



// Practice Problem 3
// 1
var a = 13;
var b = 79;
var c = 45;

if(a>b && a>c){
    console.log('The largest number is ' + a );
}

else if(b>a && b>c){
    console.log('The largest number is ' + b);
}
else{
    console.log('The largest number is ' + c);

}

// 2

var x = 9;
var y = 8;
var z = 9;

if(x === y || y === z || z === x)
{
    console.log('The triangle is Isosceles')
}
else{
    console.log('The triangle is NOT Isosceles')
}


// প্রাকটিস চ্যালেঞ্জ -১:

// ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.


var aliaMarks = 95; 
var daliaMarks = 66; 
var saliaMarks = 80; 
var maliaMarks = 59; 
var liliaMarks = 47;
var jalaiyaMarks = 77;

// Alia Result
if (aliaMarks < 50)
{
    console.log("Result of Alia is F")
}
else if (aliaMarks >= 50 && aliaMarks < 60)
{
    console.log("Result of Alia is D")
}
else if (aliaMarks >= 60 && aliaMarks < 70)
{
    console.log("Result of Alia is C")
}
else if (aliaMarks >= 70 && aliaMarks < 80)
{
    console.log("Result of Alia is B")
}
else if (aliaMarks >= 80 && aliaMarks < 90){
    console.log("Result of Alia is A")
}
else if (aliaMarks >= 90 && aliaMarks <= 100){
    console.log("Result of Alia is A+")
}
else
{
    console.log("Alia didn't attend the EXAMS")
}
// Dalia Result
if (daliaMarks < 50)
{
    console.log("Result of Dalia is F")
}
else if (daliaMarks >= 50 && daliaMarks < 60)
{
    console.log("Result of Dalia is D")
}
else if (daliaMarks >= 60 && daliaMarks < 70)
{
    console.log("Result of Dalia is C")
}
else if (daliaMarks >= 70 && daliaMarks < 80)
{
    console.log("Result of Dalia is B")
}
else if (daliaMarks >= 80 && daliaMarks < 90){
    console.log("Result of Dalia is A")
}
else if (daliaMarks >= 90 && daliaMarks <= 100){
    console.log("Result of Dalia is A+")
}
else
{
    console.log("Dalia didn't attend the EXAMS")
}
// Malia Result
if (maliaMarks < 50)
{
    console.log("Result of Malia is F")
}
else if (maliaMarks >= 50 && maliaMarks < 60)
{
    console.log("Result of Malia is D")
}
else if (maliaMarks >= 60 && maliaMarks < 70)
{
    console.log("Result of Malia is C")
}
else if (maliaMarks >= 70 && maliaMarks < 80)
{
    console.log("Result of Malia is B")
}
else if (maliaMarks >= 80 && maliaMarks < 90){
    console.log("Result of Malia is A")
}
else if (maliaMarks >= 90 && maliaMarks <= 100){
    console.log("Result of Malia is A+")
}
else
{
    console.log("Malia didn't attend the EXAMS")
}
// Salia Result
if (saliaMarks < 50)
{
    console.log("Result of Salia is F")
}
else if (saliaMarks >= 50 && saliaMarks < 60)
{
    console.log("Result of Salia is D")
}
else if (saliaMarks >= 60 && saliaMarks < 70)
{
    console.log("Result of Salia is C")
}
else if (saliaMarks >= 70 && saliaMarks < 80)
{
    console.log("Result of Salia is B")
}
else if (saliaMarks >= 80 && saliaMarks < 90){
    console.log("Result of Salia is A")
}
else if (saliaMarks >= 90 && saliaMarks <= 100){
    console.log("Result of Salia is A+")
}
else
{
    console.log("Salia didn't attend the EXAMS")
}
// Lilia Result
if (liliaMarks < 50)
{
    console.log("Result of Lilia is F")
}
else if (liliaMarks >= 50 && liliaMarks < 60)
{
    console.log("Result of Lilia is D")
}
else if (liliaMarks >= 60 && liliaMarks < 70)
{
    console.log("Result of Lilia is C")
}
else if (liliaMarks >= 70 && liliaMarks < 80)
{
    console.log("Result of Lilia is B")
}
else if (liliaMarks >= 80 && liliaMarks < 90){
    console.log("Result of Lilia is A")
}
else if (liliaMarks >= 90 && liliaMarks <= 100){
    console.log("Result of Lilia is A+")
}
else
{
    console.log("Lilia didn't attend the EXAMS")
}
// Jalaiya Result
if (jalaiyaMarks < 50)
{
    console.log("Result of Jalaiya is F")
}
else if (jalaiyaMarks >= 50 && jalaiyaMarks < 60)
{
    console.log("Result of Jalaiya is D")
}
else if (jalaiyaMarks >= 60 && jalaiyaMarks < 70)
{
    console.log("Result of Jalaiya is C")
}
else if (jalaiyaMarks >= 70 && jalaiyaMarks < 80)
{
    console.log("Result of Jalaiya is B")
}
else if (jalaiyaMarks >= 80 && jalaiyaMarks < 90){
    console.log("Result of Jalaiya is A")
}
else if (jalaiyaMarks >= 90 && jalaiyaMarks <= 100){
    console.log("Result of Jalaiya is A+")
}
else
{
    console.log("Jalaiya didn't attend the EXAMS")
}


// প্রাকটিস প্রব্লেম-২:

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।

var signal = 'yellow';

if(signal === 'red')
{
    console.log("Danger");
}
else if ( signal === 'yellow')
{
    console.log("Stop");
}
else
{
    console.log("Safe");
}