namespace ProyectoFinal
{
    public class Products
    {
        public string id { get; set; }
        public string ComercialName { get; set; }
        public string GenericName { get; set; }
        public string Quantity { get; set; }
        public string Lote { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string PharmaceuticForm { get; set; }
        public string Cum { get; set; }
        public string FinalDate { get; set; }
    }

    public class AddProducts
    {
        public string ComercialName { get; set; }
        public string GenericName { get; set; }
        public string Quantity { get; set; }
        public string Lote { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string PharmaceuticForm { get; set; }
        public string Cum { get; set; }
        public string FinalDate { get; set; }
    }
}