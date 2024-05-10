help1 :: [Int] -> [Int]
help1 [] = []
help1 (x:xs) | x >= 0 = x : (help1 xs)
            | otherwise = help1 xs

help2 :: [Int] -> [Int]
help2 [] = []
help2 (x:xs) | x < 0 = x : (help2 xs)
            | otherwise = help2 xs

separateSigns :: [Int] -> ([Int],[Int])
separateSigns xs = ((help1 xs), (help2 xs))
str_to_int :: String -> Int
str_to_int str = read str
list_str_to_int :: [String] -> [Int]
list_str_to_int [] = []
list_str_to_int (x:xs) = str_to_int x : list_str_to_int xs
main :: IO()
main = do
 raw_input_str <- readFile("in.txt")
 let str_list = words raw_input_str
 let input_list = list_str_to_int str_list
 let str_result = (show (separateSigns input_list))
 writeFile "out.txt" str_result
str_to_int :: String -> Int
str_to_int str = read str
list_str_to_int :: [String] -> [Int]
list_str_to_int [] = []
list_str_to_int (x:xs) = str_to_int x : list_str_to_int xs
main :: IO()
main = do
 raw_input_str <- readFile("in.txt")
 let str_list = words raw_input_str
 let input_list = list_str_to_int str_list
 let str_result = (show (separateSigns input_list))
 writeFile "out.txt" str_result
str_to_int :: String -> Int
str_to_int str = read str
list_str_to_int :: [String] -> [Int]
list_str_to_int [] = []
list_str_to_int (x:xs) = str_to_int x : list_str_to_int xs
main :: IO()
main = do
 raw_input_str <- readFile("in.txt")
 let str_list = words raw_input_str
 let input_list = list_str_to_int str_list
 let str_result = (show (separateSigns input_list))
 writeFile "out.txt" str_result