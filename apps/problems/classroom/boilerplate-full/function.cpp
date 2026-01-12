#include <iostream>
#include <vector>
#include <string>

##USER_CODE_HERE##

int main() {


  std::vector<int> arr;

  int size_arr;
  std::cin >> size_arr;
  arr.resize(size_arr);
  for(int i = 0; i < size_arr; ++i) std::cin >> arr[i];
int result = classroom(arr);
  std::cout << result << std::endl;
  return 0;
}