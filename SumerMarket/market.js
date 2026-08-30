// ===========================
// PRODUCTS DATA - 120 PRODUCTOS CON IMÁGENES VERIFICADAS
// ===========================
const products = [
    // ===========================
    //  FRUTAS (20 productos)
    // ===========================
    { id: 1, name: "Fresas Frescas", category: "frutas", price: 5.99, originalPrice: 7.99, description: "Fresas dulces y jugosas", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop" },
    { id: 2, name: "Uvas Verdes", category: "frutas", price: 4.49, originalPrice: 5.99, description: "Uvas verdes sin semillas", image: "https://images.unsplash.com/photo-1537640538965-1756deb171fe?w=400&h=300&fit=crop" },
    { id: 3, name: "Piña Tropical", category: "frutas", price: 3.99, originalPrice: 5.49, description: "Piña madura y dulce", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=300&fit=crop" },
    { id: 4, name: "Mangos Maduros", category: "frutas", price: 4.99, originalPrice: 6.49, description: "Mangos tropicales dulces", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop" },
    { id: 5, name: "Peras Frescas", category: "frutas", price: 3.49, originalPrice: 4.99, description: "Peras jugosas y dulces", image: "https://images.unsplash.com/photo-1615485925763-867862f85e91?w=400&h=300&fit=crop" },
    { id: 6, name: "Kiwis Verdes", category: "frutas", price: 4.99, originalPrice: null, description: "Kiwis frescos y nutritivos", image: "https://images.unsplash.com/photo-1585059895524-72359e4612aa?w=400&h=300&fit=crop" },
    { id: 7, name: "Manzanas Rojas", category: "frutas", price: 3.99, originalPrice: 5.49, description: "Manzanas crujientes y frescas", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop" },
    { id: 8, name: "Plátanos Orgánicos", category: "frutas", price: 2.49, originalPrice: 3.49, description: "Plátanos maduros y dulces", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop" },
    { id: 9, name: "Naranjas Dulces", category: "frutas", price: 3.99, originalPrice: 4.99, description: "Naranjas jugosas y frescas", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop" },
    { id: 10, name: "Sandía Fresca", category: "frutas", price: 6.99, originalPrice: 8.99, description: "Sandía dulce y refrescante", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop" },
    { id: 11, name: "Melón Cantalupo", category: "frutas", price: 4.99, originalPrice: 6.49, description: "Melón dulce y aromático", image: "https://images.unsplash.com/photo-1623227866882-c005b231520c?w=400&h=300&fit=crop" },
    { id: 12, name: "Duraznos Frescos", category: "frutas", price: 4.49, originalPrice: 5.99, description: "Duraznos maduros y dulces", image: "https://images.unsplash.com/photo-1595123550441-d377e017de6a?w=400&h=300&fit=crop" },
    { id: 13, name: "Cerezas Rojas", category: "frutas", price: 7.99, originalPrice: 9.99, description: "Cerezas frescas y dulces", image: "https://images.unsplash.com/photo-1528821128474-27f963b70978?w=400&h=300&fit=crop" },
    { id: 14, name: "Arándanos", category: "frutas", price: 5.99, originalPrice: null, description: "Arándanos frescos y antioxidantes", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b9626?w=400&h=300&fit=crop" },
    { id: 15, name: "Frambuesas", category: "frutas", price: 6.49, originalPrice: 7.99, description: "Frambuesas frescas y dulces", image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=400&h=300&fit=crop" },
    { id: 16, name: "Papaya Tropical", category: "frutas", price: 3.99, originalPrice: 5.49, description: "Papaya madura y dulce", image: "https://images.unsplash.com/photo-1617112848923-ccef2e67a6e7?w=400&h=300&fit=crop" },
    { id: 17, name: "Limones Frescos", category: "frutas", price: 2.99, originalPrice: 3.99, description: "Limones ácidos y frescos", image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=400&h=300&fit=crop" },
    { id: 18, name: "Mandarinas", category: "frutas", price: 3.49, originalPrice: null, description: "Mandarinas dulces y fáciles de pelar", image: "https://images.unsplash.com/photo-1611037594719-8f49ce65879d?w=400&h=300&fit=crop" },
    { id: 19, name: "Ciruelas Rojas", category: "frutas", price: 4.49, originalPrice: 5.99, description: "Ciruelas maduras y jugosas", image: "https://images.unsplash.com/photo-1605337709650-5066757c4aa6?w=400&h=300&fit=crop" },
    { id: 20, name: "Guayaba Fresca", category: "frutas", price: 3.99, originalPrice: 4.99, description: "Guayaba tropical y aromática", image: "https://images.unsplash.com/photo-1591206369811-4eeb2f04bc95?w=400&h=300&fit=crop" },

    // ===========================
    // 🥦 VERDURAS (20 productos)
    // ===========================
    { id: 21, name: "Brócoli Fresco", category: "verduras", price: 2.99, originalPrice: 4.49, description: "Brócoli orgánico de granja", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop" },
    { id: 22, name: "Zanahorias", category: "verduras", price: 1.99, originalPrice: 2.99, description: "Zanahorias frescas y dulces", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop" },
    { id: 23, name: "Tomates Rojos", category: "verduras", price: 2.99, originalPrice: 3.99, description: "Tomates maduros para ensalada", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop" },
    { id: 24, name: "Lechuga Fresca", category: "verduras", price: 1.99, originalPrice: null, description: "Lechuga crujiente y fresca", image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab471?w=400&h=300&fit=crop" },
    { id: 25, name: "Pimientos Verdes", category: "verduras", price: 2.49, originalPrice: 3.49, description: "Pimientos frescos y crocantes", image: "https://images.unsplash.com/photo-1563565375-f3fdf5dbc240?w=400&h=300&fit=crop" },
    { id: 26, name: "Cebollas", category: "verduras", price: 1.49, originalPrice: 2.49, description: "Cebollas frescas de calidad", image: "https://images.unsplash.com/photo-1618512496248-f07fe91eec15?w=400&h=300&fit=crop" },
    { id: 27, name: "Papas", category: "verduras", price: 2.99, originalPrice: 3.99, description: "Papas frescas para cocinar", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop" },
    { id: 28, name: "Espinacas", category: "verduras", price: 2.49, originalPrice: null, description: "Espinacas frescas y nutritivas", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop" },
    { id: 29, name: "Pepinos", category: "verduras", price: 1.99, originalPrice: 2.99, description: "Pepinos frescos y crujientes", image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&h=300&fit=crop" },
    { id: 30, name: "Calabacitas", category: "verduras", price: 2.49, originalPrice: 3.49, description: "Calabacitas frescas y tiernas", image: "https://images.unsplash.com/photo-1557844352-761f2565b576?w=400&h=300&fit=crop" },
    { id: 31, name: "Champiñones", category: "verduras", price: 3.49, originalPrice: 4.49, description: "Champiñones frescos", image: "https://images.unsplash.com/photo-1595123550441-d377e017de6a?w=400&h=300&fit=crop" },
    { id: 32, name: "Coliflor", category: "verduras", price: 2.99, originalPrice: null, description: "Coliflor fresca y blanca", image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&h=300&fit=crop" },
    { id: 33, name: "Apio", category: "verduras", price: 2.49, originalPrice: 3.49, description: "Apio fresco y crujiente", image: "https://images.unsplash.com/photo-1604542031651-523808590e47?w=400&h=300&fit=crop" },
    { id: 34, name: "Repollo", category: "verduras", price: 1.99, originalPrice: 2.99, description: "Repollo fresco y crocante", image: "https://images.unsplash.com/photo-1601379766821-4c1801f705ee?w=400&h=300&fit=crop" },
    { id: 35, name: "Berenjenas", category: "verduras", price: 2.99, originalPrice: 3.99, description: "Berenjenas frescas y brillantes", image: "https://images.unsplash.com/photo-1615485290386-45946fd47b3c?w=400&h=300&fit=crop" },
    { id: 36, name: "Rábanos", category: "verduras", price: 1.99, originalPrice: null, description: "Rábanos picantes y frescos", image: "https://images.unsplash.com/photo-1596363505729-49fdac9887f7?w=400&h=300&fit=crop" },
    { id: 37, name: "Espárragos", category: "verduras", price: 4.99, originalPrice: 6.49, description: "Espárragos verdes frescos", image: "https://images.unsplash.com/photo-1551462147-3788b586c54f?w=400&h=300&fit=crop" },
    { id: 38, name: "Ajos", category: "verduras", price: 1.49, originalPrice: 2.49, description: "Ajos frescos y aromáticos", image: "https://images.unsplash.com/photo-1618512496248-f07fe91eec15?w=400&h=300&fit=crop" },
    { id: 39, name: "Jengibre", category: "verduras", price: 2.99, originalPrice: null, description: "Jengibre fresco y picante", image: "https://images.unsplash.com/photo-1615485290386-45946fd47b3c?w=400&h=300&fit=crop" },
    { id: 40, name: "Chiles Jalapeños", category: "verduras", price: 2.49, originalPrice: 3.49, description: "Chiles jalapeños picantes", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400&h=300&fit=crop" },

    // ===========================
    // 🧀 LÁCTEOS (20 productos)
    // ===========================
    { id: 41, name: "Leche Entera", category: "lacteos", price: 3.49, originalPrice: null, description: "Leche fresca de granja", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop" },
    { id: 42, name: "Queso Cheddar", category: "lacteos", price: 5.99, originalPrice: 7.99, description: "Queso cheddar premium", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&h=300&fit=crop" },
    { id: 43, name: "Yogurt Natural", category: "lacteos", price: 2.99, originalPrice: 3.99, description: "Yogurt cremoso natural", image: "https://images.unsplash.com/photo-1488477181946-6428801e909f?w=400&h=300&fit=crop" },
    { id: 44, name: "Mantequilla", category: "lacteos", price: 3.99, originalPrice: null, description: "Mantequilla suave y cremosa", image: "https://images.unsplash.com/photo-1589985270826-4b7bb13182b1?w=400&h=300&fit=crop" },
    { id: 45, name: "Queso Mozzarella", category: "lacteos", price: 6.49, originalPrice: 7.99, description: "Mozzarella fresca italiana", image: "https://images.unsplash.com/photo-1486297678749-64bb6ce66f3d?w=400&h=300&fit=crop" },
    { id: 46, name: "Crema Ácida", category: "lacteos", price: 2.99, originalPrice: 3.99, description: "Crema ácida espesa", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop" },
    { id: 47, name: "Queso Parmesano", category: "lacteos", price: 7.99, originalPrice: 9.99, description: "Parmesano añejo rallado", image: "https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?w=400&h=300&fit=crop" },
    { id: 48, name: "Leche Deslactosada", category: "lacteos", price: 3.99, originalPrice: null, description: "Leche sin lactosa", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop" },
    { id: 49, name: "Queso Cottage", category: "lacteos", price: 3.49, originalPrice: 4.49, description: "Queso cottage bajo en grasa", image: "https://images.unsplash.com/photo-1631397834575-b8d21744c772?w=400&h=300&fit=crop" },
    { id: 50, name: "Yogurt Griego", category: "lacteos", price: 4.49, originalPrice: 5.49, description: "Yogurt griego cremoso", image: "https://images.unsplash.com/photo-1488477181946-6428801e909f?w=400&h=300&fit=crop" },
    { id: 51, name: "Queso Suizo", category: "lacteos", price: 6.99, originalPrice: null, description: "Queso suizo con agujeros", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&h=300&fit=crop" },
    { id: 52, name: "Nata para Batir", category: "lacteos", price: 3.49, originalPrice: 4.49, description: "Crema para batir", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop" },
    { id: 53, name: "Queso Feta", category: "lacteos", price: 5.49, originalPrice: 6.99, description: "Queso feta griego", image: "https://images.unsplash.com/photo-1486297678749-64bb6ce66f3d?w=400&h=300&fit=crop" },
    { id: 54, name: "Leche de Almendras", category: "lacteos", price: 4.49, originalPrice: null, description: "Leche vegetal de almendras", image: "https://images.unsplash.com/photo-1600995849557-7a40159a7e5e?w=400&h=300&fit=crop" },
    { id: 55, name: "Queso Azul", category: "lacteos", price: 7.49, originalPrice: 8.99, description: "Queso azul intenso", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&h=300&fit=crop" },
    { id: 56, name: "Requesón", category: "lacteos", price: 3.99, originalPrice: 4.99, description: "Requesón fresco y suave", image: "https://images.unsplash.com/photo-1631397834575-b8d21744c772?w=400&h=300&fit=crop" },
    { id: 57, name: "Queso Gouda", category: "lacteos", price: 6.49, originalPrice: null, description: "Queso Gouda holandés", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&h=300&fit=crop" },
    { id: 58, name: "Yogurt con Frutas", category: "lacteos", price: 3.49, originalPrice: 4.49, description: "Yogurt con trozos de fruta", image: "https://images.unsplash.com/photo-1488477181946-6428801e909f?w=400&h=300&fit=crop" },
    { id: 59, name: "Leche Condensada", category: "lacteos", price: 2.99, originalPrice: null, description: "Leche condensada azucarada", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop" },
    { id: 60, name: "Queso Crema", category: "lacteos", price: 4.49, originalPrice: 5.49, description: "Queso crema untable", image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&h=300&fit=crop" },

    // ===========================
    // 🥐 PANADERÍA (20 productos)
    // ===========================
    { id: 61, name: "Pan Integral", category: "panaderia", price: 2.99, originalPrice: null, description: "Pan integral recién horneado", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop" },
    { id: 62, name: "Croissants", category: "panaderia", price: 4.49, originalPrice: 5.99, description: "Croissants franceses (6 unidades)", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop" },
    { id: 63, name: "Baguette", category: "panaderia", price: 2.49, originalPrice: 3.49, description: "Pan francés crujiente", image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=400&h=300&fit=crop" },
    { id: 64, name: "Pan de Centeno", category: "panaderia", price: 3.49, originalPrice: null, description: "Pan de centeno artesanal", image: "https://images.unsplash.com/photo-1585478402487-427e6784a945?w=400&h=300&fit=crop" },
    { id: 65, name: "Pan de Molde", category: "panaderia", price: 2.49, originalPrice: 3.49, description: "Pan blanco suave", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop" },
    { id: 66, name: "Donas Glaseadas", category: "panaderia", price: 3.99, originalPrice: 4.99, description: "Donas dulces glaseadas (4 unidades)", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop" },
    { id: 67, name: "Muffins de Arándanos", category: "panaderia", price: 4.49, originalPrice: null, description: "Muffins caseros con arándanos", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop" },
    { id: 68, name: "Pan de Ajo", category: "panaderia", price: 3.49, originalPrice: 4.49, description: "Pan de ajo con mantequilla", image: "https://images.unsplash.com/photo-1573140401552-388e7e2f00b8?w=400&h=300&fit=crop" },
    { id: 69, name: "Galletas de Chocolate", category: "panaderia", price: 3.99, originalPrice: null, description: "Galletas con chispas de chocolate", image: "https://images.unsplash.com/photo-1499636136210-6f4391b12c81?w=400&h=300&fit=crop" },
    { id: 70, name: "Pan Multigrano", category: "panaderia", price: 3.49, originalPrice: 4.49, description: "Pan con semillas y granos", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop" },
    { id: 71, name: "Bollos de Canela", category: "panaderia", price: 4.99, originalPrice: 5.99, description: "Bollos dulces con canela", image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=300&fit=crop" },
    { id: 72, name: "Pan Pita", category: "panaderia", price: 2.99, originalPrice: null, description: "Pan pita suave (pack 6)", image: "https://images.unsplash.com/photo-1563729784474-37dbd506f6c6?w=400&h=300&fit=crop" },
    { id: 73, name: "Tarta de Manzana", category: "panaderia", price: 8.99, originalPrice: 10.99, description: "Tarta casera de manzana", image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400&h=300&fit=crop" },
    { id: 74, name: "Pan de Hamburguesa", category: "panaderia", price: 3.49, originalPrice: 4.49, description: "Pan para hamburguesas (6 unidades)", image: "https://images.unsplash.com/photo-1550547667-dad9a9cf2e6d?w=400&h=300&fit=crop" },
    { id: 75, name: "Empanadas", category: "panaderia", price: 5.99, originalPrice: null, description: "Empanadas variadas (4 unidades)", image: "https://images.unsplash.com/photo-1626202158825-1c790b203a1d?w=400&h=300&fit=crop" },
    { id: 76, name: "Pan de Hot Dog", category: "panaderia", price: 2.99, originalPrice: 3.99, description: "Pan para hot dogs (6 unidades)", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop" },
    { id: 77, name: "Cheesecake", category: "panaderia", price: 9.99, originalPrice: 12.99, description: "Cheesecake cremoso", image: "https://images.unsplash.com/photo-1533134242443-d4fd21cf27a0?w=400&h=300&fit=crop" },
    { id: 78, name: "Pan de Pasas", category: "panaderia", price: 3.49, originalPrice: null, description: "Pan dulce con pasas", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop" },
    { id: 79, name: "Brownies", category: "panaderia", price: 5.49, originalPrice: 6.99, description: "Brownies de chocolate (4 unidades)", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?w=400&h=300&fit=crop" },
    { id: 80, name: "Pan de Elote", category: "panaderia", price: 3.99, originalPrice: 4.99, description: "Pan dulce de elote", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop" },

    // ===========================
    // 🥩 CARNES (20 productos)
    // ===========================
    { id: 81, name: "Pechuga de Pollo", category: "carnes", price: 8.99, originalPrice: 11.99, description: "Pechuga de pollo fresca (por lb)", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
    { id: 82, name: "Carne Molida", category: "carnes", price: 7.49, originalPrice: 9.99, description: "Carne molida de res (por lb)", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=400&h=300&fit=crop" },
    { id: 83, name: "Filete de Res", category: "carnes", price: 12.99, originalPrice: 15.99, description: "Filete premium (por lb)", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop" },
    { id: 84, name: "Costillas de Cerdo", category: "carnes", price: 6.99, originalPrice: 8.99, description: "Costillas frescas (por lb)", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    { id: 85, name: "Muslos de Pollo", category: "carnes", price: 5.99, originalPrice: null, description: "Muslos de pollo con piel (por lb)", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
    { id: 86, name: "Chuletas de Cerdo", category: "carnes", price: 7.99, originalPrice: 9.99, description: "Chuletas de cerdo (por lb)", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    { id: 87, name: "Tocino", category: "carnes", price: 6.49, originalPrice: 7.99, description: "Tocino ahumado (por lb)", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf968ba9?w=400&h=300&fit=crop" },
    { id: 88, name: "Salchichas", category: "carnes", price: 4.99, originalPrice: null, description: "Salchichas de cerdo (pack 8)", image: "https://images.unsplash.com/photo-1615947757717-7c903786e8c7?w=400&h=300&fit=crop" },
    { id: 89, name: "Carne para Guisar", category: "carnes", price: 6.99, originalPrice: 8.99, description: "Carne de res para guisar (por lb)", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=400&h=300&fit=crop" },
    { id: 90, name: "Pollo Entero", category: "carnes", price: 9.99, originalPrice: 12.99, description: "Pollo entero fresco", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
    { id: 91, name: "Bistec", category: "carnes", price: 10.99, originalPrice: null, description: "Bistec de res (por lb)", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop" },
    { id: 92, name: "Chorizo", category: "carnes", price: 5.49, originalPrice: 6.99, description: "Chorizo mexicano (por lb)", image: "https://images.unsplash.com/photo-1615947757717-7c903786e8c7?w=400&h=300&fit=crop" },
    { id: 93, name: "Pavo Molido", category: "carnes", price: 7.99, originalPrice: 9.49, description: "Carne molida de pavo (por lb)", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=400&h=300&fit=crop" },
    { id: 94, name: "Alitas de Pollo", category: "carnes", price: 6.49, originalPrice: null, description: "Alitas de pollo frescas (por lb)", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
    { id: 95, name: "Jamón Serrano", category: "carnes", price: 11.99, originalPrice: 14.99, description: "Jamón serrano curado (por lb)", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf968ba9?w=400&h=300&fit=crop" },
    { id: 96, name: "Costilla de Res", category: "carnes", price: 9.99, originalPrice: 12.99, description: "Costilla de res (por lb)", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop" },
    { id: 97, name: "Salchichón", category: "carnes", price: 7.49, originalPrice: null, description: "Salchichón italiano (por lb)", image: "https://images.unsplash.com/photo-1615947757717-7c903786e8c7?w=400&h=300&fit=crop" },
    { id: 98, name: "Lomo de Cerdo", category: "carnes", price: 8.49, originalPrice: 10.49, description: "Lomo de cerdo tierno (por lb)", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop" },
    { id: 99, name: "Hígado de Res", category: "carnes", price: 4.99, originalPrice: 6.49, description: "Hígado fresco de res (por lb)", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=400&h=300&fit=crop" },
    { id: 100, name: "Panceta", category: "carnes", price: 7.99, originalPrice: null, description: "Panceta de cerdo (por lb)", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf968ba9?w=400&h=300&fit=crop" },

    // ===========================
    //  BEBIDAS (20 productos)
    // ===========================
    { id: 101, name: "Jugo de Naranja", category: "bebidas", price: 3.99, originalPrice: null, description: "Jugo de naranja 100% natural", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop" },
    { id: 102, name: "Agua Mineral", category: "bebidas", price: 1.99, originalPrice: 2.99, description: "Agua mineral sin gas (pack 6)", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop" },
    { id: 103, name: "Refresco de Cola", category: "bebidas", price: 2.49, originalPrice: 3.49, description: "Refresco 2L", image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=300&fit=crop" },
    { id: 104, name: "Café Molido", category: "bebidas", price: 5.99, originalPrice: 7.49, description: "Café premium molido", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop" },
    { id: 105, name: "Té Verde", category: "bebidas", price: 4.49, originalPrice: null, description: "Té verde en hojas", image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400&h=300&fit=crop" },
    { id: 106, name: "Jugo de Manzana", category: "bebidas", price: 3.49, originalPrice: 4.49, description: "Jugo de manzana natural", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop" },
    { id: 107, name: "Agua con Gas", category: "bebidas", price: 2.49, originalPrice: null, description: "Agua carbonatada (pack 6)", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop" },
    { id: 108, name: "Cerveza Artesanal", category: "bebidas", price: 3.99, originalPrice: 4.99, description: "Cerveza artesanal (pack 6)", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop" },
    { id: 109, name: "Vino Tinto", category: "bebidas", price: 12.99, originalPrice: 15.99, description: "Vino tinto reserva", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop" },
    { id: 110, name: "Leche de Soya", category: "bebidas", price: 3.99, originalPrice: null, description: "Bebida de soya sin azúcar", image: "https://images.unsplash.com/photo-1600995849557-7a40159a7e5e?w=400&h=300&fit=crop" },
    { id: 111, name: "Jugo de Uva", category: "bebidas", price: 4.49, originalPrice: 5.49, description: "Jugo de uva concentrado", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop" },
    { id: 112, name: "Gatorade", category: "bebidas", price: 2.49, originalPrice: null, description: "Bebida isotónica (pack 4)", image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=300&fit=crop" },
    { id: 113, name: "Café en Grano", category: "bebidas", price: 7.99, originalPrice: 9.99, description: "Café arábica en grano", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop" },
    { id: 114, name: "Té Negro", category: "bebidas", price: 3.99, originalPrice: null, description: "Té negro inglés", image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400&h=300&fit=crop" },
    { id: 115, name: "Agua de Coco", category: "bebidas", price: 3.49, originalPrice: 4.49, description: "Agua de coco natural (pack 4)", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop" },
    { id: 116, name: "Refresco de Lima", category: "bebidas", price: 2.49, originalPrice: null, description: "Refresco de lima-limón 2L", image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=300&fit=crop" },
    { id: 117, name: "Vino Blanco", category: "bebidas", price: 11.99, originalPrice: 14.99, description: "Vino blanco chardonnay", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop" },
    { id: 118, name: "Jugo de Piña", category: "bebidas", price: 3.99, originalPrice: null, description: "Jugo de piña tropical", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop" },
    { id: 119, name: "Chocolate Caliente", category: "bebidas", price: 4.49, originalPrice: 5.49, description: "Mezcla para chocolate caliente", image: "https://images.unsplash.com/photo-1543363818-2c1b410a7f33?w=400&h=300&fit=crop" },
    { id: 120, name: "Energético", category: "bebidas", price: 3.49, originalPrice: null, description: "Bebida energética (pack 4)", image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=300&fit=crop" }
];

// ===========================
// CART STATE
// ===========================
let cart = [];
let currentCategory = 'all';

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCart();
    initMagicIntro();
    loadTheme();
});

// ===========================
// THEME TOGGLE (DARK/LIGHT MODE)
// ===========================
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// ===========================
// MAGIC INTRO LOGIC
// ===========================
function initMagicIntro() {
    const intro = document.getElementById('magicIntro');
    
    setTimeout(() => {
        if (intro) {
            intro.style.display = 'none';
        }
    }, 5500);
}

// ===========================
// RENDER PRODUCTS
// ===========================
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    
    if (productsToRender.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #999;"><i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i><p>No se encontraron productos</p></div>';
        return;
    }
    
    grid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop'">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">
                        $${product.price.toFixed(2)}
                        ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===========================
// CART FUNCTIONS
// ===========================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification(`${product.name} agregado al carrito`);
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 3rem; color: #999;"><i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem;"></i><p>Tu carrito está vacío</p></div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop'">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Producto eliminado del carrito');
}

// ===========================
// CART SIDEBAR TOGGLE
// ===========================
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// ===========================
// CATEGORY SELECTION
// ===========================
function selectCategory(category, element) {
    currentCategory = category;
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    element.classList.add('active');

    filterProducts();
}

// ===========================
// FILTER PRODUCTS
// ===========================
function filterProducts() {
    let filtered = products;

    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    const checkedCategories = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    
    if (checkedCategories.length > 0) {
        filtered = filtered.filter(p => checkedCategories.includes(p.category));
    }

    const maxPrice = document.getElementById('priceRange').value;
    filtered = filtered.filter(p => p.price <= maxPrice);

    renderProducts(filtered);
}

// ===========================
// NOTIFICATION
// ===========================
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ===========================
// CHECKOUT
// ===========================
function checkout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`¡Gracias por tu compra!\n\nTotal: $${total.toFixed(2)}\n\nEn una aplicación real, serías redirigido a la pasarela de pago.`);
    cart = [];
    updateCart();
    toggleCart();
}

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});