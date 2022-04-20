import { Layout, Card, Page, TextStyle } from "@shopify/polaris";

const Example = () => {
  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Example Page"
          description="This is just the example page"
        >
          <Card>
            <div>
              <TextStyle variation="strong">Pondir Example</TextStyle>
            </div>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};

export default Example;
