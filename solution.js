// Homecoming Party

// Problem Description

// The original family in the town has organised a homecoming party with N people invited.

// Each person has a special trust value denoted by array A. A person i will be friends with a person j only if either A[i]%A[j] ==0 or A[j]%A[i]==0.

// Find the maximum number of friends each person can make in this party.

// Problem Constraints

// 1<N<= 2 x 10³

// 1 <=A[i]<= 10³

// Input Format

// 1st and only arguement has an integer array A

----------------X-------------------------------X----------------------------X-------------------------------------X---------------------------------------------X-------------------

  
  
let a = [];
let count = 0;
for (let i = 0 ; i <A.length; i++){
	for (let j = 0 ; j <A.length; j++){
		if(A[i]%A[j]==0 ||A[i]%A[j]==0){
        count++;
	}
    a.push(count)

	}
}return a
