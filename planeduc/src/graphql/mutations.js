/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      puppy
      race
      birthdate
      paidCourses
      courses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      puppy
      race
      birthdate
      paidCourses
      courses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      puppy
      race
      birthdate
      paidCourses
      courses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      date
      attendees {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      date
      attendees {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      date
      attendees {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCourseCustomer = /* GraphQL */ `
  mutation CreateCourseCustomer(
    $input: CreateCourseCustomerInput!
    $condition: ModelCourseCustomerConditionInput
  ) {
    createCourseCustomer(input: $input, condition: $condition) {
      id
      customerID
      courseID
      customer {
        id
        firstName
        lastName
        puppy
        race
        birthdate
        paidCourses
        createdAt
        updatedAt
      }
      course {
        id
        date
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseCustomer = /* GraphQL */ `
  mutation UpdateCourseCustomer(
    $input: UpdateCourseCustomerInput!
    $condition: ModelCourseCustomerConditionInput
  ) {
    updateCourseCustomer(input: $input, condition: $condition) {
      id
      customerID
      courseID
      customer {
        id
        firstName
        lastName
        puppy
        race
        birthdate
        paidCourses
        createdAt
        updatedAt
      }
      course {
        id
        date
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseCustomer = /* GraphQL */ `
  mutation DeleteCourseCustomer(
    $input: DeleteCourseCustomerInput!
    $condition: ModelCourseCustomerConditionInput
  ) {
    deleteCourseCustomer(input: $input, condition: $condition) {
      id
      customerID
      courseID
      customer {
        id
        firstName
        lastName
        puppy
        race
        birthdate
        paidCourses
        createdAt
        updatedAt
      }
      course {
        id
        date
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
