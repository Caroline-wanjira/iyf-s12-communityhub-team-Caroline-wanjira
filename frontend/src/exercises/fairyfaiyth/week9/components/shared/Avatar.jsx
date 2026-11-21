function Avatar({ src, name = "User", size = 50 }) {
  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6c4ab6",
        color: "white",
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          width={size}
          height={size}
        />
      ) : (
        name.charAt(0).toUpperCase()
      )}
    </div>
  );
}

export default Avatar;
