const { gql, default: request } = require('graphql-request');

const MASTER_URL =
  'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/' +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  '/master';

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgColor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessByCategory = async (category) => {
  if (!category) {
    return null;
  }
  const query = gql`
    query MyQuery($category: String!) {
      businessLists(where: { category: { name: $category } }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;

  const variables = { category };

  const result = await request(MASTER_URL, query, variables);
  return result;
};

const getBusinessById = async (id) => {
  const query =
    gql`
  query GetBusinessById {
    businessList(where: {id: "` +
    id +
    `"}) {
      about
      address
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }
  
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const createNewBooking=async(businessId,date,time,userEmail,userName)=>{
  const mutationQuery = gql`
  mutation CreateBooking {
    createBooking(
      data: {bookingStatus: Booked, businessList: {connect: {id: "`+businessId+`"}}, date: "`+date+`", time: "`+time+`", userEmail: "`+userEmail+`", userName: "`+userName+`"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking
};
