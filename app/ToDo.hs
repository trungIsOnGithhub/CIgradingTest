-- Code goes in this file
module ToDo
(
    addNum,
    sumList
) where

-- Exercise 1 goes here
addNum :: Int -> Int -> Int
addNum num1 num2 = num1 + num2

-- Exercise 2 goes here
sumList :: Num a => [a] -> a
sumList [] = 0
sumList (x:xs) = x + sumList xs