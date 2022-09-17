/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchCustomers = /* GraphQL */ `
  query SearchCustomers(
    $filter: SearchableCustomerFilterInput
    $sort: [SearchableCustomerSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCustomerAggregationInput]
  ) {
    searchCustomers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourseCustomer = /* GraphQL */ `
  query GetCourseCustomer($id: ID!) {
    getCourseCustomer(id: $id) {
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
export const listCourseCustomers = /* GraphQL */ `
  query ListCourseCustomers(
    $filter: ModelCourseCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerID
        courseID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
