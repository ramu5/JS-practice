import _ from 'lodash'

const user = {
  name: 'Ram',
  age: 99,
  email: ['k-_-ar@naver.com']
}

const copyUser = _.cloneDeep(user)  // lodash 패키지의 .cloneDeep 메소드를 사용하여 깊은 복사
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

user.email.push('k__ar@naver.com')
console.log(user.email === copyUser.email)
console.log('user', user)
console.log('copyUser', copyUser)