#! /usr/bin/env node 

import inquirer from "inquirer"

const Currency:any={
    USD:1, //base currency
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    YTL:0.031,
    PAK:280
};

let user_answer=await inquirer.prompt
(
    [
        {
           name:"from",
           message:"Enter From Currency",
           type:"list",
           choices:["USB","EUR","GBP","INR","YTL","PAK"]
        },
        {
            name:"to",
            message:"Enter To Currency",
            type:"list",
            choices:["USB","EUR","GBP","INR","YTL","PAK"]
        },
        {
            name:"amount",
            message:"Enter Your Amount",
            type:"number"
        }
   ]
)

let fromAmount=Currency[user_answer.from] // Exchangr rate
let toAmount=Currency[user_answer.to] // Exchange rate
let amount=user_answer.amount
let baseAmount=amount/fromAmount // USB base currency // 4
let convertedAmount=baseAmount*toAmount

console.log(Math.floor(convertedAmount));

