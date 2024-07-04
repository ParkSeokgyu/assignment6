// 이메일 정규 표현식(필수 포함되어야 하는 문자)
export const EMAIL_REGEX = new RegExp(
  /^[^\s@]+@zod\.com$/
);

// 이메일 필수값 에러 메세지
export const EMAIL_REQUIRED_VALUE = "Only @zod.com emails are allowed";


// username 최소 허용 글자
export const USERNAME_MIN_LENGTH = 5;

// username 최소 허용 글자 에러 메세지
export const USERNAME_MIN_LENGTH_ERROR = "Username should be at least 5 characters long.";


// 비밀번호 최소 허용 글자
export const PASSWORD_MIN_LENGTH = 10;

// 비밀번호 최소 허용 글자 에러 메세지
export const PASSWORD_MIN_LENGTH_ERROR = "Password should be at least 10 characters long";


// 비밀번호 정규 표현식(포함되어야 하는 문자)
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*\d).+$/
);

// 비밀번호 정규 표현식 에러 메세지
export const PASSWORD_REGEX_ERROR = "Password should contain at least one number (0123456789).";



