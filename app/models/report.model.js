module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      nickname: String,
      avatar: String,
      similarityPercentage: Number
    },
    {
      timestamps: true
    }
  );

  schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Report = mongoose.model('report', schema);

  return Report;
};
