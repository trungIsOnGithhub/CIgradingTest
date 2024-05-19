transform :: [Int] -> [Int]
transform xs = [x*3 | x <- xs, x `mod` 2 == 0]