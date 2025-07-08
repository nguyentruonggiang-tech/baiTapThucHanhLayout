export default function Item(prop) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <img src={prop.image} className="card-img-top" alt="..." />
        <div className="card-body text-center py-4">
          <h5 className="card-title mb-2">{prop.title}</h5>
          <p className="card-text mb-2">{prop.content}</p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  );
}
