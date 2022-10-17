/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      firstName
      lastName
      puppy
      race
      birthdate
      email
      phoneNumber
      comment
      paidCourses
      courses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      firstName
      lastName
      puppy
      race
      birthdate
      email
      phoneNumber
      comment
      paidCourses
      courses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      firstName
      lastName
      puppy
      race
      birthdate
      email
      phoneNumber
      comment
      paidCourses
      courses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      date
      theme
      attendees {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      date
      theme
      attendees {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      date
      theme
      attendees {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCourseCustomer = /* GraphQL */ `
  subscription OnCreateCourseCustomer {
    onCreateCourseCustomer {
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
        email
        phoneNumber
        comment
        paidCourses
        createdAt
        updatedAt
      }
      course {
        id
        date
        theme
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourseCustomer = /* GraphQL */ `
  subscription OnUpdateCourseCustomer {
    onUpdateCourseCustomer {
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
        email
        phoneNumber
        comment
        paidCourses
        createdAt
        updatedAt
      }
      course {
        id
        date
        theme
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourseCustomer = /* GraphQL */ `
  subscription OnDeleteCourseCustomer {
    onDeleteCourseCustomer {
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
        email
        phoneNumber
        comment
        paidCourses
        createdAt
        updatedAt
      }
      course {
        id
        date
        theme
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
