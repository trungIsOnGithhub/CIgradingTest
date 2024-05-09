bai1 :: [Int] -> [Int]
bai1 (x:xs) = xs

str_to_int :: String -> Int
str_to_int str = read str
list_str_to_int :: [String] -> [Int]
list_str_to_int [] = []
list_str_to_int (x:xs) = str_to_int x : list_str_to_int xs
main :: IO()
main = do
 raw_input_str <- readFile("in.txt")
 let str_array = words raw_input_str
 
 let str = show str_array
 writeFile "out.txt" str
str_to_int :: String -> Int
str_to_int str = read str
list_str_to_int :: [String] -> [Int]
list_str_to_int [] = []
list_str_to_int (x:xs) = str_to_int x : list_str_to_int xs
main :: IO()
main = do
 raw_input_str <- readFile("in.txt")
 let str_array = words raw_input_str
 
 let str = show str_array
 writeFile "out.txt" str
str_to_int :: String -> Int
str_to_int str = read str
list_str_to_int :: [String] -> [Int]
list_str_to_int [] = []
list_str_to_int (x:xs) = str_to_int x : list_str_to_int xs
main :: IO()
main = do
 raw_input_str <- readFile("in.txt")
 let str_array = words raw_input_str
 
 let str = show str_array
 writeFile "out.txt" str