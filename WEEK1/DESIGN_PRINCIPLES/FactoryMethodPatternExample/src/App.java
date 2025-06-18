public class App {
   public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
    }

    // Removing Redundancy by creating a helper function
    // public static void main(String[] args) {
    //     createAndOpen(new WordDocumentFactory());
    //     createAndOpen(new PdfDocumentFactory());
    //     createAndOpen(new ExcelDocumentFactory());
    // }

    // private static void createAndOpen(DocumentFactory factory) {
    //     Document doc = factory.createDocument();
    //     doc.open();
    // }
}