-- Code goes in this file
module ToDo
(
    addNum,
    sumList,
    grayCode,
) where

-- Exercise 1 goes here
addNum :: Int -> Int -> Int
addNum num1 num2 = num1 + num2

-- Exercise 2 goes here
sumList :: Num a => [a] -> a
sumList [] = 0
sumList (x:xs) = x + sumList xs

-- Exercise 3 goes here
grayCode :: Int -> [String]
grayCode 0 = [""]
grayCode n = let xs = grayCode (n-1) in map ('0':) xs ++ map ('1':) (reverse xs)
