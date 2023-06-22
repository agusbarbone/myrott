export const ItemListContainer = ( {greeting, children} ) => {
    return (
        <>
        <h3>Bienvenido {greeting}, esta pagina se encuentra en construccion</h3>
        <div>{children}</div>
        </>
    )
}