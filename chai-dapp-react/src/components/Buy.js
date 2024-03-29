import { ethers } from "ethers";
const Buy = ({ state }) => {
  const giveThought = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.01") };
    const transaction = await contract.giveThought(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md"
       style={{ width: "50%", marginTop: "25px" }}
       >
        <form onSubmit={giveThought}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Thought</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Thought"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Show
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;