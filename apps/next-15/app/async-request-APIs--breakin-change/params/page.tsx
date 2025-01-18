const AsyncRequestAPIsBreakinChangeParamsPage = async (props: { params: Promise<{ name: string }> }) => {
  const { name } = await props.params;
  return <div>Params: {name}</div>;
};

export default AsyncRequestAPIsBreakinChangeParamsPage;
