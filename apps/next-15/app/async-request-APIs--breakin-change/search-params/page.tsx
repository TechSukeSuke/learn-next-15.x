const AsyncRequestAPIsBreakinChangeSearchParamsPage = async ({searchParams}: {searchParams: Promise<{name: string}>}) => {
  const params = (await searchParams).name;
  return <div>Search Params: {params}</div>;
};

export default AsyncRequestAPIsBreakinChangeSearchParamsPage;
