exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("messages", {
    id: "id",
    text: {
      type: "text",
      notNull: true
    },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp")
    },
    sent_to: {
      type: "varchar(25)",
      notNull: true
    },
    sent_from: {
      type: "varchar(25)",
      notNull: true
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("messages");
};
