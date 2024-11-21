import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { TMDB_IMG_URL } from "../utils/utils";
import { useSelector } from "react-redux";
import { usegetTrailerMovie } from "../hooks/usegetTrailerMovie";

const MovieCard = ({ movie ,search}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const trailer = useSelector((state) => state.movies.trailer); // Access the trailer data from Redux
  const { fetchTrailer } = usegetTrailerMovie(); // Use the custom hook

  const handleOpen = async () => {
    setOpen(true);
    setLoading(true);

    await fetchTrailer(movie.id); // Fetch trailer when dialog opens
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Movie card */}
      <div
        style={{ cursor: "pointer" }}
        onClick={handleOpen}
        className={search?"w-48 bg-gray-300 rounded-lg  ":"w-48 bg-gray-300 rounded-lg flex-shrink-0"}
      >
        {/* Movie poster */}
        <img
          className="object-cover rounded-sm"
          src={`${TMDB_IMG_URL}${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      {/* Trailer dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "500px", // Square dialog
            height: "500px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <DialogTitle style={{ textAlign: "center", fontWeight: "bold" }}>
          {movie.title} - Trailer
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            backgroundColor: "#000",
          }}
        >
          {loading ? (
            <p style={{ color: "white", fontSize: "16px" }}>Loading trailer...</p>
          ) : trailer ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
              title="YouTube Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            ></iframe>
          ) : (
            <p style={{ color: "white", fontSize: "16px" }}>No trailer available.</p>
          )}
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button
            onClick={handleClose}
            style={{
              color: "#fff",
              backgroundColor: "#1976d2",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MovieCard;
