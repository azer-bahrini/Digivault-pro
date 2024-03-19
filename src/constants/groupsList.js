const GROUPS_LIST = [
  {
    name: "Admin",
    modules: [
      {
        name: "User Management",
        permissions: [
          { id: 1, name: "View " },
          { id: 2, name: "Create " },
          { id: 3, name: "Update " },
          { id: 4, name: "Delete " },
        ],
      },
      {
        name: "Group Management",
        permissions: [
          { id: 1, name: "View " },
          { id: 2, name: "Create " },
          { id: 3, name: "Update " },
          { id: 4, name: "Delete " },
        ],
      },
    ],
  },
  {
    name: "Archivist",
    modules: [
      {
        name: "User Management",
        permissions: [{ id: 1, name: "View " }],
      },
      {
        name: "Group Management",
        permissions: [],
      },
    ],
  },
  {
    name: "Rh",
    modules: [
      {
        name: "User Management",
        permissions: [
          { id: 1, name: "View" },
          { id: 2, name: "Create" },
        ],
      },
      {
        name: "Group Management",
        permissions: [
          { id: 1, name: "View" },

          { id: 3, name: "Update" },
          { id: 4, name: "Delete" },
        ],
      },
    ],
  },
];

export default GROUPS_LIST;
