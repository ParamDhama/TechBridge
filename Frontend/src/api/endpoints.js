const endpoints = {


  // Internships
  INTERNSHIPS: {
    GET_ALL: "/api/internships/",          // Get all internships
    CREATE: "/api/internships/",           // Create a new internship
    UPDATE: (id) => `/api/internships/${id}`, // Update internship by ID
    DELETE: (id) => `/api/internships/${id}`, // Delete internship by ID
  },

  // Scholarships
  SCHOLARSHIPS: {
    GET_ALL: "/api/scholarships/",
    CREATE: "/api/scholarships/",
    UPDATE: (id) => `/api/scholarships/${id}`,
    DELETE: (id) => `/api/scholarships/${id}`,
  },

  // Hackathons
  HACKATHONS: {
    GET_ALL: "/api/hackathons/",
    CREATE: "/api/hackathons/",
    UPDATE: (id) => `/api/hackathons/${id}`,
    DELETE: (id) => `/api/hackathons/${id}`,
  },

  // Competitions
  COMPETITIONS: {
    GET_ALL: "/api/competitions/",
    CREATE: "/api/competitions/",
    UPDATE: (id) => `/api/competitions/${id}`,
    DELETE: (id) => `/api/competitions/${id}`,
  },

  // Conferences
  CONFERENCES: {
    GET_ALL: "/api/conferences/",
    CREATE: "/api/conferences/",
    UPDATE: (id) => `/api/conferences/${id}`,
    DELETE: (id) => `/api/conferences/${id}`,
  },

  // // Collaborations
  // COLLABORATIONS: {
  //   GET_ALL: "/api/collaborations/",
  //   CREATE: "/api/collaborations/",
  //   UPDATE: (id) => `/api/collaborations/${id}`,
  //   DELETE: (id) => `/api/collaborations/${id}`,
  // },
};

export default endpoints;
