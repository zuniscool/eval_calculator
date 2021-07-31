# eval_calculator

## 경고 Alert
* 이 프로그램의 핵심인 '연산' 기능이 eval() 함수로 작성되었습니다. MDN에 따르면 eval()는 절대 사용하지 말아야 한다고 합니다. eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수입니다. 즉, 사용자에게 전달받은 악의적인 문자열이 eval()로 실행된다면, 악의적인 코드를 수행하는 결과를 초래할 수 있는 것입니다.  따라서 이 프로그램은 배포되어서는 안되는 프로그램 입니다.

## 개선해야 할 사항
* eval()로 작성된 코드 전체를 수정해야 합니다. 이것은 곧 프로그램 전체의 방향을 바꾼다는 것과 동일합니다. 앞서 언급했듯이 이 프로그램에서 eval()은 핵심 기능인 '연산'을 담당하고 있기 때문입니다.
* 연산자가 연속적으로 입력되는 것을 막아야 합니다. 현재는 연산자가 연속 입력된 상태로 연산하였을 때, 경고창을 띄우도록 하였습니다.
* 피연산자의 첫 숫자로 0이 입력되는 것을 막아야 합니다. 현재는 피연산의 첫 숫자가 0이 입력되었을 때, 경고창을 띄우도록 하였습니다.

## 기능 Function
* 키보드&마우스 입력 You can input by a keyboard and mouse click. <img width="415" alt="calc_readme1" src="https://user-images.githubusercontent.com/76937647/127730284-ae472f62-582b-4e24-af49-fe355693532f.png">

* 소수점 계산 You can calculate a decimal point. <img width="500" alt="calc_readme2" src="https://user-images.githubusercontent.com/76937647/127730398-69f06bed-546e-4914-a94c-597e8c89f3af.png">

* 양수 음수 변환 You can change a integer by positive or negative. <img width="500" alt="calc_readme3" src="https://user-images.githubusercontent.com/76937647/127730437-8c0510ac-5c11-442f-b8da-de60a989d4b8.png">

* 백분율 You can use a percentage. <img width="500" alt="calc_readme4" src="https://user-images.githubusercontent.com/76937647/127730476-b3deb80b-eee4-4a58-8a8d-11020d61dd8e.png">

## 주의 Caution
* 연산자를 중복해서 입력하지 마세요. <img width="449" alt="스크린샷 2021-07-31 오후 4 35 52" src="https://user-images.githubusercontent.com/76937647/127732688-af1b8fd2-97c9-40d8-9d22-7971f361cd40.png">
* 피연산자 입력의 맨 앞 숫자로 0을 입력하지 마세요. <img width="449" alt="스크린샷 2021-07-31 오후 4 35 52" src="https://user-images.githubusercontent.com/76937647/127732688-af1b8fd2-97c9-40d8-9d22-7971f361cd40.png">
* 하나의 피연산자가 39자를 초과하지 않도록 하였습니다. 피연사자가 39자를 초과한다면, 입력창이 경고창과 함께 초기화 됩니다. <img width="447" alt="스크린샷 2021-07-31 오후 4 42 11" src="https://user-images.githubusercontent.com/76937647/127732848-eeb45c99-4519-4a7b-9722-bcb568e7757d.png">
