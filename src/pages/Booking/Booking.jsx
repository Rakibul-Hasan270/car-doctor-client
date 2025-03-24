import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'

const Booking = () => {
    const { users } = useContext(AuthContext);
    const url = `http://localhost:4000/booking?email=${users.email}`;
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setBook(data));
    }, [url]);

    const handelDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json()).then(data => {
                        if (data.deletedCount === 1) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = book.filter(book => book._id !== id);
                            setBook(remaining);
                        }

                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    };

    return (
        <div>
            <h3 className="text-center text-5xl mb-14">
                Your Booking Data: {book.length}
            </h3>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pic_Name</th>
                            <th>Email</th>
                            <th>Customer Id</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {book.map((book) => (
                            <tr key={book._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={book.img}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{book.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{book.email}</td>
                                <td>{book.img}</td>
                                <th>
                                    <button
                                        onClick={() => handelDelete(book._id)}
                                        className="btn btn-ghost btn-xs"
                                    >
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;
